import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToBag, addToWishlist }) => {
  const { id, name, image, price } = product;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: {price} C$</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Ver Detalles
        </Link>
        <button
          type="button"
          className="btn btn-dark w-100 mt-2"
          onClick={() => addToBag(product)}
        >
          Agregar al Carrito
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={() => addToWishlist(product)}
        >
          <i className="bi bi-bookmark-heart"></i> Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
