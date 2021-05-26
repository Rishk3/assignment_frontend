import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { DataLayer } from "./context_api/DataLayer";
import reducer, { initialState } from "./context_api/reducer";

ReactDom.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
