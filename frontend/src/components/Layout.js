import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import "../styles/layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content>{this.props.children}</Content>
      </div>
    );
  }
}

export default withRouter(Layout);
