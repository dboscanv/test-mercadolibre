import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectItem } from "../redux/actions";
import "../styles/item.scss";
import shipping from "../assets/ic_shipping.png";

class Item extends Component {
  constructor(props) {
    super(props);
    this.goToDetail = this.goToDetail.bind(this);
  }

  formatPrice(amount) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0
    }).format(amount);
  }

  goToDetail() {
    this.props.selectItem(this.props.item.id);
    this.props.history.push(`item/${this.props.item.id}`);
  }

  render() {
    return (
      <div className="item" onClick={this.goToDetail}>
        <div className="item__general">
          <img src={this.props.item.picture} alt={this.props.item.title} />
          <div className="item__resume">
            <div className="item__resume--title">
              <h1>
                {this.formatPrice(this.props.item.price.amount)}
                {/* <span>{this.props.item.price.decimals}</span> */}
              </h1>
              {this.props.item.free_shipping ? (
                <img src={shipping} alt="Free shipping" />
              ) : null}
            </div>
            <h2>{this.props.item.title}</h2>
          </div>
        </div>
        <span>{this.props.item.address}</span>
      </div>
    );
  }
}

export default connect(
  null,
  {
    selectItem
  }
)(withRouter(Item));
