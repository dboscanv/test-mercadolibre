import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ItemDetail from "./components/ItemDetail";
import ItemList from "./components/ItemList";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={ItemList} />
              <Route path="/items" component={ItemList} />
              <Route path="/item/:id" component={ItemDetail} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
