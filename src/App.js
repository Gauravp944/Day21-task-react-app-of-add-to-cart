import Card from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const products = [
  {
    name: "Fancy Product",
    price1: "40.00",
    price2: "80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "true",
    sale: "",
    discount: "",
  },
  {
    name: "Special Item",
    price1: "20.00",
    price2: "18.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "",
    sale: "true",
    discount: "true",
  },
  {
    name: "Sale Item",
    price1: "50.00",
    price2: "25.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "",
    sale: "true",
    discount: "true",
  },
  {
    name: "Fancy Product",
    price1: "40.00",
    price2: "80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "true",
    sale: "",
    discount: "",
  },
  {
    name: "Special Item",
    price1: "20.00",
    price2: "18.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "",
    sale: "true",
    discount: "true",
  },
  {
    name: "Sale Item",
    price1: "50.00",
    price2: "25.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "",
    sale: "true",
    discount: "true",
  },
  {
    name: "Fancy Product",
    price1: "40.00",
    price2: "80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "true",
    sale: "",
    discount: "",
  },
  {
    name: "Special Item",
    price1: "20.00",
    price2: "18.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    action: "",
    sale: "true",
    discount: "true",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addedtoCart = (item) => {
    setCartItems((oldItems) => {
      let updated = false;

      const newCartItem = oldItems.map((d) => {
        let name = d;
        if (item === name) {
          updated = true;
        }
        return name;
      });

      if (!updated) {
        newCartItem.push(item);
        return newCartItem;
      } else {
        let filteredArray = newCartItem.filter((e) => e !== item);

        return filteredArray;
      }
    });
  };

  let cartAllItems = cartItems.length;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartAllItems}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((item, index) => {
              return (
                <Card
                  key={index}
                  AddToCart={addedtoCart}
                  name={item.name}
                  price1={item.price1}
                  price2={item.price2}
                  image={item.image}
                  action={item.action}
                  sale={item.sale}
                  discount={item.discount}
                />
              );
            })}
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
