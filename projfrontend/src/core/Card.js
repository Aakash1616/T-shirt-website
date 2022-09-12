import React from 'react'
import ImageHelper from './helper/ImageHelper';
import {Navigate} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';

const isAuthenticated = true; 

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false
}) => {

    const cartTitle = product ? product.name : "No name photo ";
    const cartDescription = product ? product.description : "No name photo ";
    const cartPrice = product ? product.price : "No name photo ";

    const addToCart = () => {
      if(isAuthenticated){
        addItemToCart(product, ()=>{})
        console.log("Added to Cart"); 
      } else {
        console.log("Login Please");  
      }
    }; 

    const getAredirect = (redirect) => {
      if(redirect){
        return <Navigate to="/cart" replace />;
      }
    };

    const showRemoveFromCart = removeFromCart => {
      return(
        removeFromCart && (
          <button
                onClick={() => {
                  removeItemFromCart(product._id);
                  console.log("removed from cart");
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
        )
      )
    }

    const showAddToCart = addToCart => {
      return (
        addToCart && (
          <button
            onClick={addToCart}  
            className="btn btn-block btn-outline-success mt-2 mb-2">
            Add to Cart
          </button>
        )
      );
    };

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">${cartPrice}</p>
          <div className="row">
            <div className="col-12">
            {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
            {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;