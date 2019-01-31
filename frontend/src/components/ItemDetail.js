import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { API_URL } from "../constants";
import Loader from "react-loader-spinner";
import { clearItems, clearSearch, setCategories } from "../redux/actions";
import "../styles/itemDetail.scss";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  async componentDidMount() {
    try {
      let itemId = this.props.selectedItem
        ? this.props.selectedItem
        : this.props.match.params
        ? this.props.match.params.id
        : null;

      if (itemId) {
        const response = await fetch(`${API_URL}/api/items/${itemId}`);
        let item = await response.json();
        await this.setState({ item });

        if (!this.props.categories.length) {
          const categories = await fetch(
            `${API_URL}/api/categories/${item.category_id}`
          );
          let breadcrumb = await categories.json();
          await this.props.setCategories(breadcrumb);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this.props.clearItems();
    this.props.clearSearch();
  }

  formatPrice(amount) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0
    }).format(amount);
  }

  formatCondition(condition) {
    return condition === "new" ? "Nuevo" : "Usado";
  }

  render() {
    if (this.state.item.id) {
      return (
        <div className="item-detail">
          <div className="item-detail__image">
            <img src={this.state.item.picture} alt={this.state.item.title} />
          </div>
          <div className="item-detail__info">
            <p>
              {this.formatCondition(this.state.item.condition)} -{" "}
              {this.state.item.sold_quantity} vendidos
            </p>
            <h1>{this.state.item.title}</h1>
            <h2>{this.formatPrice(this.state.item.price.amount)}</h2>
            <button>Comprar</button>
          </div>
          <div className="item-detail__description">
            <h3>Descripción del producto</h3>
            <p>{this.state.item.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <Loader type="Circles" color="#3483FA" />;
        </div>
      );
    }
  }
}

export default withRouter(
  connect(
    ({ selectedItem, categories }) => {
      return { selectedItem, categories };
    },
    { clearItems, clearSearch, setCategories }
  )(ItemDetail)
);
