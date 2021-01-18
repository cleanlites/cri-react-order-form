import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getForm } from "./resources/fetch";
import { main_sections, material_sections } from "./resources/form-map";
import _ from "lodash";
const initialState = {
  loading: true,
  message: "Loading...",
  lightbox: true,
  current_pane: 1,
  currentMaterialPane: 1,
  sections: main_sections,
  current_node: "Order",
  materialSectionOpen: false,
  materialSections: material_sections,
  selectedMaterials: [],
  formIsValid: false,
  inputs: {},
  generatorSame: false,
  confirming: false,
};

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);
  const { materialSections } = appState;
  useEffect(() => {
    async function handleInputs(inputs) {
      const inputList = {};
      inputs.forEach((input) => {
        inputList[input.label] = {
          id: input.id,
          grav_name: `input_${input.id}`,
          name: input.label,
          choices: input.choices || [],
          type: input.type,
          unit: "",
          value: input.placeholder || "",
          inputs: input.inputs,
        };
      });
      return inputList;
    }
    getForm().then((result) => {
      handleInputs(result.fields).then((res) => {
        console.log(result);
        setAppState({ ...appState, loading: false, inputs: res });
      });
    });
  }, [getForm]);

  useEffect(() => {
    if (
      (appState.current_node === "Materials" &&
        appState.selectedMaterials.length > 0) ||
      appState.sections[appState.current_node].isMaterial === true
    ) {
      return setAppState({ ...appState, materialSectionOpen: true });
    } else {
      return setAppState({ ...appState, materialSectionOpen: false });
    }
  }, [appState.current_node, appState.selectedMaterials]);

  //for generator same

  const setLoading = (payload) => {
    if (!payload.message) {
      payload.message = "";
    }
    const state = { ...appState };
    state.loading = payload.loading;
    state.message = payload.message;
    setAppState(state);
  };

  const setLoadingMessage = (message) => {
    setAppState({ ...appState, message: message });
  };

  const goToPaneByClickingNode = (num, name) => {
    setAppState({
      ...appState,
      current_pane: num,
      current_node: name,
    });
  };

  const prevPane = () => {
    let allSections = Object.keys(appState.sections);
    let current = appState.current_pane;
    if (current === 1) {
      toast.error("There are no previous panes!");
      current = current;
    } else {
      current--;
    }
    while (appState.sections[allSections[current - 1]].isSelected === false) {
      current--;
    }
    setAppState({
      ...appState,
      current_pane: current,
      current_node: Object.keys(appState.sections)[current - 1],
    });
  };

  const nextPane = () => {
    let allSections = Object.keys(appState.sections);
    let currentName = allSections[appState.current_pane];
    let the_length = allSections.length;
    let current = appState.current_pane;
    //increment the current pane unless its at the end
    if (current < the_length) {
      current++;
    } else {
      // handleAllErrors();
    }
    //if its not selected go again
    while (appState.sections[allSections[current - 1]].isSelected === false) {
      current++;
    }
    setAppState({
      ...appState,
      current_pane: current,
      current_node: Object.keys(appState.sections)[current - 1],
    });
  };

  const updateSelectedMaterials = (material) => {
    const sections = appState.sections;
    const newState = appState.materialSections;
    newState[material].selected = !newState[material].selected;
    sections[material].isSelected = !sections[material].isSelected;
    const mats = [];
    Object.keys(newState).map((section) => {
      if (newState[section].selected) {
        mats.push(section);
      }
    });

    setAppState({
      ...appState,
      sections: sections,
      selectedMaterials: mats,
      materialSections: newState,
    });
  };

  const clearAllMaterial = () => {
    let newState = appState;

    Object.keys(newState.materialSections).forEach((sec) => {
      newState.materialSections[sec].selected = false;
    });

    newState.materialSectionOpen = false;
    newState.selectedMaterials = [];

    setAppState(newState);
  };

  function setValid(paneName, boolean, callback = () => {}) {
    const secs = { ...appState.sections };
    secs[paneName].isValid = boolean;
    setAppState((prev) => ({
      ...prev,
      sections: secs,
    }));
    callback();
  }
  useEffect(() => {
    const incompleteSections = _.filter(appState.sections, (o) => {
      return !o.isValid;
    });
    console.log("checking form is valid...");
    if (incompleteSections.length === 0 && !appState.formIsValid) {
      setAppState((prev) => ({ ...prev, formIsValid: true }));
    }
  }, [appState.sections]);

  const setInputValue = (input) => {
    const newState = { ...appState };

    newState.inputs[input.name].value = input.value;
    setAppState({ ...appState, newState });
  };

  const setInputUnit = (name, unit) => {
    const inputs = { ...appState.inputs };
    inputs[name].unit = unit;
    setAppState((prevState) => {
      return { ...prevState, inputs };
    });
  };
  const setGeneratorSame = async () => {
    if (appState.sections.Billing.isValid && !appState.generatorSame) {
      const i = appState.inputs;

      i.generatorCity = i.billingCity;
      i.generatorCompany = i.billingCompany;
      i.generatorAddress = i.billingAddress;
      i.generatorContactName = i.billingContactName;
      i.generatorZip = i.billingZip;
      i.generatorPhone = i.billingPhone;
      i.generatorState = i.billingState;

      await setAppState((prevState) => {
        return {
          ...prevState,
          i,
          generatorSame: !prevState.generatorSame,
        };
      });
    } else {
      toast.error("Billing is not complete yet!");
    }
  };
  const getInputValue = (name) => {
    if (appState.inputs == {}) {
      return "";
    }
    return appState.inputs[name].value;
  };
  const submitForm = () => {
    setAppState((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setAppState((prev) => ({ ...prev, loading: false, confirming: true }));
    }, 1000);
  };
  return (
    <AppContext.Provider
      value={{
        setInputValue,
        getInputValue,
        clearAllMaterial,
        setValid,
        setInputUnit,
        appState,
        setLoadingMessage,
        setLoading,
        nextPane,
        prevPane,
        goToPaneByClickingNode,
        updateSelectedMaterials,
        setGeneratorSame,
        submitForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
