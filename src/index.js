import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === "production") {
  var apiUrl = "https://sl-slowfood-api.herokuapp.com/api/v1";
} else {
  var apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
