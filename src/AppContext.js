import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { submitFormData } from './resources/fetch';
import { main_sections, material_sections } from './resources/form-map';
import _ from 'lodash';

import form from './resources/form.json';

import gcfForm from './resources/gcf-form.json';

const initialState = {
  loading: true,
  message: 'Loading...',
  lightbox: true,
  current_pane: 1,
  currentMaterialPane: 1,
  sections: main_sections,
  current_node: 'Order',
  materialSectionOpen: false,
  materialSections: material_sections,
  selectedMaterials: [],
  formIsValid: false,
  inputs: {},
  receivingHours: { timeFrom: '9:00AM', timeTo: '5:00PM' },
  generatorSame: false,
  confirming: false,
  submitted: false,
  captchaToken: null,
};

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    async function handleInputs(inputs) {
      const inputList = {};
      inputs.forEach((input) => {
        if (input.id === 190) {
          const date = new Date();
          inputList[input.label] = {
            id: input.id,
            grav_name: `input_${input.id}`,
            name: input.label,
            pdf_name: 'submitDate',
            value: `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()} `,
          };
          return;
        }

        inputList[input.label] = {
          id: input.id,
          grav_name: `input_${input.id}`,
          name: input.label,
          choices: input.choices || [],
          type: input.type,
          unit: '',
          value: '',
          pdf_name: gcfForm.fields.find((f) => f.id === input.id).pdf_name,
          // value: input.placeholder || "",
          inputs: input.inputs,
        };
        if (input.label === 'hours__from') {
          inputList[input.label].value = '8:00AM';
        }
        if (input.label === 'hours__to') {
          inputList[input.label].value = '5:00PM';
        }
      });

      return inputList;
    }
    // pulls form from a json object instead of fetching everytime

    handleInputs(form.fields).then((inputList) => {
      setAppState({
        ...appState,
        loading: false,
        inputs: inputList,
      });
    });
  }, []);

  useEffect(() => {
    if (
      (appState.current_node === 'Materials' &&
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
      payload.message = '';
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
      toast.error('There are no previous panes!');
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
      if (appState.formIsValid) {
        goToConfirm();
      }
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

  const updateSelectedMaterials = async (material) => {
    const sections = { ...appState.sections };
    const newState = { ...appState.materialSections };
    newState[material].selected = !newState[material].selected;
    sections[material].isSelected = !sections[material].isSelected;
    const mats = [];
    Object.keys(newState).map((section) => {
      if (newState[section].selected) {
        mats.push(section);
      }
    });

    setAppState((prev) => ({
      ...prev,
      sections: sections,
      selectedMaterials: mats,
      materialSections: newState,
    }));
  };

  const clearAllMaterial = () => {
    let newState = { ...appState };
    const sections = newState.sections;

    //clears all the material section main
    Object.keys(sections).forEach((sec) => {
      if (sections[sec].isMaterial) {
        sections[sec].isSelected = false;
      }
    });

    Object.keys(newState.materialSections).forEach((sec) => {
      newState.materialSections[sec].selected = false;
    });

    newState.materialSectionOpen = false;
    newState.selectedMaterials = [];
    console.log('setting new state');
    return setAppState(newState);
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

    if (incompleteSections.length === 0 && !appState.formIsValid) {
      setAppState((prev) => ({ ...prev, formIsValid: true }));
    }
  }, [appState.sections]);

  const setInputValue = (input) => {
    const i = { ...appState.inputs };
    i[input.name].value = input.value;
    setAppState((prev) => ({ ...prev, inputs: i }));
  };

  const setInputUnit = (name, unit) => {
    const inputs = { ...appState.inputs };
    inputs[name].unit = unit;
    setAppState((prevState) => {
      return { ...prevState, inputs };
    });
  };

  const getUnits = (name) => {
    if (!appState.inputs[name]) {
      return '';
    }
    return appState.inputs[name].unit;
  };
  const setGeneratorSame = async (boolean) => {
    if (appState.sections.Billing.isValid && !appState.generatorSame) {
      const i = { ...appState.inputs };

      i.generatorCity.value = i.billingCity.value;
      i.generatorCompany.value = i.billingCompany.value;
      i.generatorAddress.value = i.billingAddress.value;
      i.generatorContactName.value = i.billingContactName.value;
      i.generatorZip.value = i.billingZip.value;
      i.generatorPhone.value = i.billingPhone.value;
      i.generatorState.value = i.billingState.value;

      return await setAppState((prevState) => {
        return {
          ...prevState,
          inputs: i,
          generatorSame: true,
        };
      });
    } else {
      toast.error('Billing is not complete yet!');
    }
  };
  const getInputValue = (name) => {
    if (appState.inputs == {}) {
      return '';
    }
    return appState.inputs[name].value;
  };

  const handleReceivingHours = ({ type, value }) => {
    if (type == 'time-from') {
      setAppState((prev) => ({
        ...prev,
        receivingHours: {
          timeFrom: value,
          timeTo: prev.receivingHours.timeTo,
        },
      }));
    } else if (type == 'time-to') {
      setAppState((prev) => ({
        ...prev,
        receivingHours: {
          timeTo: value,
          timeFrom: prev.receivingHours.timeFrom,
        },
      }));
    }
  };

  useEffect(() => {
    if (!appState.loading) {
      setInputValue({
        name: 'Receiving Hours',
        value: `${appState.receivingHours.timeFrom} - ${appState.receivingHours.timeTo}`,
      });
    }
  }, [appState.receivingHours]);

  function goToConfirm() {
    setAppState((prev) => ({ ...prev, loading: true }));
    try {
      appState.inputs.forEach((input) => {
        const required = [];
        if (input.required && input.value == '') {
          required.push(input.name);
        }
      });
      if (require.length > 0) {
        toast.error('There are required fields not filled out.');
        throw 'There was an error';
      }
    } catch (error) {
      setAppState((prev) => ({ ...prev, loading: false }));
    }
    setTimeout(() => {
      setAppState((prev) => ({ ...prev, loading: false, confirming: true }));
    }, 1000);
  }

  const submitTheForm = () => {
    setAppState((prev) => ({
      ...prev,
      loading: true,
    }));

    let final_data = { form_id: 13 };
    const inputs = appState.inputs;

    Object.keys(inputs).map((input) => {
      let the_input = inputs[input];
      let value = the_input.value;
      // add units
      if (the_input.unit && the_input.unit !== '' && value && value !== '') {
        value = `${value} ${the_input.unit}`;
      }
      final_data = { ...final_data, [the_input.pdf_name]: value ?? 'none' };
    });

    const form_data = new FormData();
    Object.keys(final_data).forEach((d) => form_data.append(d, final_data[d]));

    // form_data.append("isTest", true);
    submitFormData(form_data)
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
        setAppState((prev) => ({ ...prev, submitted: true }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setConfirming = (value) => {
    setAppState((prev) => ({
      ...prev,
      confirming: value,
    }));
  };

  const setCaptchaToken = (value) => {
    setAppState((prev) => ({ ...prev, captchaToken: value }));
  };
  return (
    <AppContext.Provider
      value={{
        setCaptchaToken,
        setConfirming,
        setInputValue,
        getInputValue,
        getUnits,
        clearAllMaterial,
        setValid,
        setInputUnit,
        appState,
        setLoadingMessage,
        setLoading,
        nextPane,
        prevPane,
        handleReceivingHours,
        goToPaneByClickingNode,
        updateSelectedMaterials,
        setGeneratorSame,
        goToConfirm,
        submitTheForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
