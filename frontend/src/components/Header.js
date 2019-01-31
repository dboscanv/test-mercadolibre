import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "./assets/Logo_ML.png";
import logo from "../assets/Logo_ML.png";
import { withRouter, Link } from "react-router-dom";
import { setSearch, setItems } from "../redux/actions";
import "../styles/header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ""
    };

    this.searchItems = this.searchItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async searchItems(event) {
    event.preventDefault();
    this.props.setSearch(this.state.searchField);
    this.props.history.push(`/items?search=${this.state.searchField}`);
  }

  handleChange(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    return (
      <header>
        <nav>
          <form className="search-form" onSubmit={this.searchItems}>
            <Link to="/">
              <img src={logo} alt="MercadoLibre" />
            </Link>
            <input
              type="text"
              id="search-field"
              placeholder="Nunca dejes de buscar"
              className="search-input"
              value={this.state.searchField}
              onChange={this.handleChange}
            />
            <button type="submit" className="search-button"></button>
          </form>
        </nav>
      </header>
    );
  }
}

export default withRouter(
  connect(
    null,
    { setSearch, setItems }
  )(Header)
);
