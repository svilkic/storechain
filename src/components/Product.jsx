import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const p = {
      id: this.props.id,
      type: this.props.type,
      name: this.props.name,
      price: this.props.price,
      quantity: 1,
    };

    const disableBtn = () => {
      return this.props.quantity === 0 ? true : false;
    };

    const buyProduct = () => {
      const billNumber = Date.now();
      const date = new Date().toLocaleString("en-US", { hour12: false });
      const bill = {
        billNumber,
        date,
        customer: { fname: "Ime", lname: "Prezime", phone: "123456" },
        product: p,
      };
      this.props.onBuy(p, bill);
    };

    return (
      <>
        <strong>{this.props.name}</strong> -{this.props.price}rsd -{" "}
        {this.props.quantity}qty
        <button disabled={disableBtn()} onClick={() => buyProduct()}>
          buy
        </button>
      </>
    );
  }
}
