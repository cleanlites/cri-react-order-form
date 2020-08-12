import React from "react";
import Header from "./components/Header";
import Pane from "./components/Pane";
import OrderType from './components/sections/OrderType'
import Billing from "./components/sections/Billing";
import Generator from "./components/sections/Generator";
import "./App.css";
import ProgressNodes from "./components/ProgressNodes";
import BottomNav from "./components/BotttomNav";

class App extends React.Component {
  
  state = {
    current_pane: 1,
    progress: {},
    sections: {
      'OrderType': {
        name: "OrderType",
        isValid: false,
      },
      'Billing': {
        name: "Billing",
        isValid: false,
      },
      'Generator': {
        name: "Generator",
        isValid: false,
      },
      materialSectionOpen: false,
      materialSections: {
        title: "",
        isSelected: false,
        needsUnitSelector: true,
      },
    },
  };
  render() {
    return (
      <div className="container-fluid px-0 main-form">
        <div className="row main-row">
          <div className="main-block mt-3">
            <Header />

            <ProgressNodes progress={this.state.progress} />

            <Pane sectionTitle="Order Type" inner={<OrderType />} />

            <Pane sectionTitle="Billing" inner={<Billing />} />

            <Pane sectionTitle="Generator" inner={<Generator />} />
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;
