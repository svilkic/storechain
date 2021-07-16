import { Component } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Product from "./components/Product";
import Shop from "./components/Shop";

const shopTypes = [
  { id: 1, type: "corner shop", name: "Shop1" },
  { id: 2, type: "supermarket", name: "Shop2" },
  { id: 3, type: "pharmacy", name: "Shop3" },
];

const products = [
  { id: "p1", type: "food", name: "apple", price: 135, quantity: 12 },
  { id: "p2", type: "drink", name: "coca-cola", price: 65, quantity: 6 },
  { id: "p3", type: "medicine", name: "aspirine", price: 550, quantity: 4 },
  { id: "p4", type: "medicine", name: "caffetine", price: 399, quantity: 4 },
  { id: "p5", type: "cigarettes", name: "marlboro", price: 499, quantity: 3 },
  { id: "p6", type: "toys", name: "ball", price: 299, quantity: 1 },
  {
    id: "p7",
    type: "parking ticket",
    name: "ticket 1",
    price: 999,
    quantity: 5,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: shopTypes,
      products: products,
    };
  }

  render() {
    const handleBuyProduct = (product) => {
      const productsInStock = [...this.state.products].map((p) => {
        if (p.id === product.id) {
          if (p.quantity > 0) p.quantity--;
        }
        return p;
      });

      this.setState((state) => {
        return {
          ...state,
          products: productsInStock,
        };
      });
    };

    return (
      <>
        {this.state.shops.map((shop, ind) => (
          <Shop
            key={ind}
            name={shop.name}
            type={shop.type}
            products={this.state.products}
            handleBuyProduct={handleBuyProduct}
          />
        ))}
      </>
    );
  }
}
