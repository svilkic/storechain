import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      quantity: 0,
      totalPrice: 0,
    };
  }

  render() {
    const addToCart = (product) => {
      const newItems = this.state.item.push(product);
      this.setState((state) => {
        return { items: newItems };
      });
    };

    return (
      <div>
        <ul>
          {this.state.items((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
