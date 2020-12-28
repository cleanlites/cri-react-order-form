import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getForm } from "./resources/fetch";
import { main_sections, material_sections } from "./resources/form-map";

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
          value: "",
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
      setAppState({ ...appState, materialSectionOpen: true });
    } else {
      setAppState({ ...appState, materialSectionOpen: false });
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

  const setValid = (paneName, boolean) => {
    const state = { ...appState };
    state.sections[paneName].isValid = boolean;
    setAppState(state);
  };

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
  const setGeneratorSame = () => {
    if (appState.sections.Billing.isValid) {
      setAppState((prevState) => {
        return { ...prevState, generatorSame: !prevState.generatorSame };
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
    console.log("yed");
  };
  return (
    <AppContext.Provider
      value={{
        setInputValue,
        getInputValue,
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
