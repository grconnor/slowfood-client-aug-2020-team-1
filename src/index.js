import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import App from "./App";

let apiUrl;

if (process.env.NODE_ENV === "production") {
  apiUrl = "https://sl-slowfood-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
