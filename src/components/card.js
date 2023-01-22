import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import React, { useState } from "react";

function Card(props) {
  const [activeState, changeState] = useState(false);

  const toggleState = () => {
    changeState(!activeState);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {props.sale ? (
          <div className="badge bg-dark text-white position-absolute sale_style">
            Sale
          </div>
        ) : (
          <div></div>
        )}
        <img className="card-img-top" src={props.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.name}</h5>
            {props.discount ? (
              <div>
                <span className="text-muted text-decoration-line-through">
                  ${props.price1}
                </span>
                &nbsp;${props.price2}
              </div>
            ) : (
              <div>
                ${props.price1} - ${props.price2}
              </div>
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {props.action ? (
            <div className={activeState ? "text-center" : "text-center"}>
              <span className="btn btn-outline-dark mt-auto">View Options</span>
            </div>
          ) : (
            <div>
              <div
                className={activeState ? "text-center hide-div" : "text-center"}
                onClick={() => {
                  props.AddToCart(props.name);
                  toggleState();
                }}
              >
                <span className="btn btn-outline-dark mt-auto">
                  Add to Cart
                </span>
              </div>
              <div
                className={activeState ? "text-center" : "text-center hide-div"}
                onClick={() => {
                  props.AddToCart(props.name);
                  toggleState();
                }}
              >
                <span className="btn btn-outline-dark mt-auto">Remove</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
