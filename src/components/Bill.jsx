import { Component } from "react";

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billNumber: this.props.billNumber,
      date: this.props.date,
      customer: this.props.customer,
      product: this.props.product,
    };
  }

  render() {
    const { billNumber, date, customer, product } = this.state;

    return { billNumber, date, customer, product };
  }
}
