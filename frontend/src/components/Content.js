import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class Content extends Component {
  render() {
    const categories = this.props.categories.map((category, index) => {
      return <li key={index}>{category}</li>;
    });

    return (
      <main>
          <ul className="list-breadcrumb">{categories}</ul>
          <div className="list-container">{this.props.children}</div>
      </main>
    );
  }
}

export default withRouter(
  connect(({ categories }) => {
    return { categories };
  })(Content)
);
