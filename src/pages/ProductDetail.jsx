import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products.js";

const ProductDetail = ({ addToBag }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(
    product ? product.image : ""
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 mb-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h1>{product.name}</h1>
          <p>
            <strong>Precio:</strong> {product.price} C$
          </p>
          <p>
            <strong>Presentación:</strong> {product.presentation}
          </p>
          <p>
            <strong>Consistencia:</strong> {product.consistency}
          </p>
          <p>
            <strong>Requiere Refrigeración:</strong>{" "}
            {product.requiresRefrigeration ? "Sí" : "No"}
          </p>
          <p>
            <strong>Vida Útil:</strong> {product.shelfLife}
          </p>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
          <p>
            <strong>Ingredientes:</strong> {product.ingredients}
          </p>
          <p>
            <strong>Aroma:</strong> {product.aroma}
          </p>
          <p>
            <strong>Controla el Frizz:</strong>{" "}
            {product.controlsFrizz ? "Sí" : "No"}
          </p>
          <p>
            <strong>Apto para:</strong> {product.suitableFor}
          </p>
          <p>
            <strong>Puntos de Venta:</strong> {product.pointsOfSale}
          </p>
          <p>
            <strong>Descuento por Refill:</strong> {product.refillDiscount}
          </p>

          <button
            className="btn btn-dark mt-3"
            onClick={() => addToBag(product)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>

      <div className="mt-4 border-top pt-4">
        <Link to="/product-list" className="btn btn-outline-secondary mt-3">
          Volver a Productos
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
