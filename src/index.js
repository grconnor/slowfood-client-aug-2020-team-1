import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Products from "./Products";
import Welcome from "./Welcome";

const App = () => {
  return (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/products" component={Products}></Route>
    </Switch>
  </>
  );
};

ReactDOM.render(
<BrowserRouter>
  <Header />
  <Products />
</BrowserRouter>,
document.getElementById("app")
);

