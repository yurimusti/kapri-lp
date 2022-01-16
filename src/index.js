import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./translate";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
