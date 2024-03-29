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
import Specialty from "./components/materials/Specialty";
import Containers from "./components/sections/Containers";
import Site from "./components/sections/Site";
import ConfirmForm from "./components/confirm/ConfirmForm";
import ProgressNodes2 from "./components/ProgressNodes2";
import BottomNav from "./components/BotttomNav";
import Loading from "./components/Loading/index";
import { AppContext } from "./AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/animations.css";
import "./css/style.css";
// import Tester from "./Tester";
import Submitted from "./components/Submitted";

const App = () => {
  const {
    appState: { loading, confirming, submitted, inputs },
  } = useContext(AppContext);

  if (submitted) {
    return <Submitted name={inputs?.billingContactName} />;
  }
  return loading ? (
    <Loading />
  ) : confirming ? (
    <ConfirmForm />
  ) : (
    <div className="container-fluid px-0 main-form">
      {/* <Tester appState={appState} /> */}
      <div className="row main-row">
        <div className="main-block mt-3">
          <Header />
          <ProgressNodes2 />
          <Pane
            key="pane-holder--Order"
            sectionTitle="Order"
            children={<OrderType />}
          />
          <Pane
            key="pane-holder--Billing"
            sectionTitle="Billing"
            children={<Billing />}
          />
          <Pane
            key="pane-holder--Generator"
            sectionTitle="Generator"
            children={<Generator />}
          />
          <Pane
            key="pane-holder--Materials"
            sectionTitle="Materials"
            children={<Materials />}
          />
          <Pane
            key="pane-holder--Ballast"
            sectionTitle="Ballast"
            componentOverride={
              <h2>
                <i className="fas fa-bolt"></i> Ballast
              </h2>
            }
            children={<Ballast />}
          />
          <Pane
            key="pane-holder--Batteries"
            sectionTitle="Batteries"
            componentOverride={
              <h2>
                <i className="fas fa-car-battery"></i> Batteries
              </h2>
            }
            children={<Batteries />}
          />
          <Pane
            key="pane-holder--eWaste"
            sectionTitle="eWaste"
            componentOverride={
              <h2>
                <i className="fas fa-plug"></i> eWASTE
              </h2>
            }
            children={<EWaste />}
          />
          <Pane
            key="pane-holder--HazOther"
            sectionTitle="Haz/Other"
            componentOverride={
              <h2>
                <i className="fas fa-radiation-alt"></i> Haz / Other
              </h2>
            }
            children={<HazOther />}
          />
          <Pane
            key="pane-holder--Lamps"
            sectionTitle="Lamps"
            componentOverride={
              <h2>
                <i className="fas fa-lightbulb"></i>LAMPS
              </h2>
            }
            children={<Lamps />}
          />
          <Pane
            key="pane-holder--Specialty"
            sectionTitle="Specialty"
            componentOverride={
              <h2>
                <i className="fas fa-charging-station"></i> Specialty
              </h2>
            }
            children={<Specialty />}
          />
          <Pane
            key="pane-holder--Containers"
            sectionTitle="Containers"
            children={<Containers />}
          />
          <Pane
            key="pane-holder--Site"
            sectionTitle="Site"
            children={<Site />}
          />
        </div>
      </div>

      <ToastContainer />
      <BottomNav />
    </div>
  );
};

export default App;
