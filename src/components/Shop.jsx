import React, { Component } from "react";
import Product from "./Product";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      type: this.props.type,
      bought: [],
    };
  }

  render() {
    const buy = (product, bill) => {
      this.props.handleBuyProduct(product);

      this.setState((state) => {
        return {
          bought: [...state.bought, bill],
        };
      });
      console.log(bill);
    };

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <h2>
              {this.state.name} - {this.state.type}
            </h2>
            <ul>
              {this.props.products.map((product, index) => (
                <li key={product.id}>
                  <Product
                    id={product.id}
                    type={product.type}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    onBuy={buy}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Bills</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>bid</th>
                  <th>date</th>
                  <th>user</th>
                  <th>product</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bought.map((b, index) => (
                  <tr key={b.billNumber}>
                    <td>{b.billNumber}</td>
                    <td>{b.date}</td>
                    <td>
                      {b.customer.fname}
                      {b.customer.lname}
                    </td>
                    <td>{b.product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div></div>
      </div>
    );
  }
}
