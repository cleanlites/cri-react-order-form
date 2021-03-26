import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppContextProvider from "./AppContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Route exact path="/">
//         <AppContextProvider>
//           <App />
//         </AppContextProvider>
//       </Route>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
