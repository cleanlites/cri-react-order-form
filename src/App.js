import React, { useContext } from "react";
import Header from "./components/Header";
import Pane from "./components/Pane";
import OrderType from "./components/sections/OrderType";
import Billing from "./components/sections/Billing";
import Generator from "./components/sections/Generator";
import Materials from "./components/sections/Materials";
import Lamps from "./components/materials/Lamps";
import EWaste from "./components/materials/EWaste";
import Ballast from "./components/materials/Ballast";
import HazOther from "./components/materials/Haz-Other";
import Batteries from "./components/materials/Batteries";
import Containers from "./components/sections/Containers";
import Site from "./components/sections/Site";
import "./App.css";
import ProgressNodes2 from "./components/ProgressNodes2";
import BottomNav from "./components/BotttomNav";
import { AppContext } from "./AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  const {
    setValid,
    appState,
    appState: { loading },
  } = useContext(AppContext);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container-fluid px-0 main-form">
      <div className="row main-row">
        <div style={{ height: "50px", width: "100%", color: "white" }}>
          <div style={{ display: "inline", margin: "1rem" }}>
            Current Pane: {appState.current_pane}
          </div>
          <div style={{ display: "inline", margin: "1rem" }}>
            Current Node:{" "}
            {JSON.stringify(appState.sections[appState.current_node])}
          </div>
          <div style={{ display: "inline", margin: "1rem" }}>
            Current Mat Pane: {appState.currentMaterialPane}
          </div>
          <div style={{ display: "inline", margin: "1rem" }}>
            Material Section Open: {appState.materialSectionOpen ? "Yed" : "No"}
          </div>
          <div style={{ display: "inline", margin: "1rem" }}>
            Selected Materials: {JSON.stringify(appState.selectedMaterials)}
          </div>
          <div style={{ display: "inline", margin: "1rem" }}>
            Current Node is Material:{" "}
            {appState.current_node.isMaterial ? "yes" : "no"}
          </div>
        </div>
        <div className="main-block mt-3">
          <Header />

          <ProgressNodes2 />

          <Pane
            key="pane-holder--Order"
            sectionTitle="Order"
            children={
              <OrderType
                setValid={(bool) => {
                  setValid("Order", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Billing"
            sectionTitle="Billing"
            children={
              <Billing
                setValid={(bool) => {
                  setValid("Generator", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Generator"
            sectionTitle="Generator"
            children={
              <Generator
                setValid={(bool) => {
                  setValid("Generator", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Materials"
            sectionTitle="Materials"
            children={
              <Materials
                setValid={(bool) => {
                  setValid("Materials", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Ballast"
            sectionTitle="Ballast"
            children={
              <Ballast
                setValid={(bool) => {
                  setValid("Ballast", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Batteries"
            sectionTitle="Batteries"
            children={
              <Batteries
                setValid={(bool) => {
                  setValid("Batteries", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--eWaste"
            sectionTitle="eWaste"
            children={
              <EWaste
                setValid={(bool) => {
                  setValid("eWaste", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--HazOther"
            sectionTitle="Haz/Other"
            children={
              <HazOther
                setValid={(bool) => {
                  setValid("Haz/Other", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Lamps"
            sectionTitle="Lamps"
            children={
              <Lamps
                setValid={(bool) => {
                  setValid("Lamps", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Containers"
            sectionTitle="Containers"
            children={
              <Containers
                setValid={(bool) => {
                  setValid("Containers", bool);
                }}
              />
            }
          />
          <Pane
            key="pane-holder--Site"
            sectionTitle="Site"
            children={
              <Site
                setValid={(bool) => {
                  setValid("Site", bool);
                }}
              />
            }
          />
        </div>
      </div>
      <ToastContainer />
      <BottomNav />
    </div>
  );
};

export default App;
