import React from "react";
import ProductCard from "../components/ProductCard";

const WishlistPage = ({ wishlist, addToBag, clearWishlist }) => {
  console.log(wishlist); // Check if items appear in the console

  return (
    <div className="container mt-4">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <>
          <div className="d-flex mb-3">
            <button
              className="btn btn-primary me-2"
              onClick={() => wishlist.forEach((item) => addToBag(item))}
            >
              Add All to Bag
            </button>
            <button className="btn btn-danger" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          </div>
          <div className="row">
            {wishlist.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard product={product} addToBag={addToBag} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
