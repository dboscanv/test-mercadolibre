import React, { Component } from "react";
import { API_URL } from "../constants";
import { connect } from "react-redux";
import { setItems, setSearch } from "../redux/actions";
import Loader from "react-loader-spinner";
import Item from "./Item";
import "../styles/itemList.scss";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  async componentWillMount() {
    let urlParam = new URLSearchParams(this.props.location.search).get(
      "search"
    );
    if (urlParam !== null && urlParam !== this.props.search) {
      await this.props.setSearch(urlParam);
      await this.getItems();
    }
  }

  async componentDidUpdate(prevProps, newState) {
    if (this.props.search !== prevProps.search) {
      await this.getItems();
    }
  }

  async getItems() {
    this.setState({ isLoading: true });
    try {
      let { search } = this.props;
      const response = await fetch(`${API_URL}/api/items?q=${search}`);
      let data = await response.json();
      await this.props.setItems(data);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const items = this.props.items.length
      ? this.props.items.map((item, index) => {
          return (
            <li key={index}>
              <Item item={item} />
            </li>
          );
        })
      : [];

    if (this.state.isLoading) {
      return (
        <div className="main-container">
          <Loader type="Circles" color="#3483FA" />;
        </div>
      );
    }

    if (items.length) {
      return <ul>{items}</ul>;
    } else {
      let msg = this.props.noItems
        ? "No encontramos productos :("
        : "Busca productos, marcas y mas..";
      return (
        <div className="main-container">
          <h1>{msg}</h1>
        </div>
      );
    }
  }
}

export default connect(
  ({ items, search, noItems }) => {
    return { items, search };
  },
  { setItems, setSearch }
)(ItemList);
