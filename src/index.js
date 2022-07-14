import React from "react";
import ReactDOM from "react-dom/client";
//import * as ReactDOM from "react-dom";
// import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
//import { rootReducer, initialState } from "./reducers/rootReducer";
import { store } from "./app/store";

//const store = createStore(rootReducer, initialState);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
