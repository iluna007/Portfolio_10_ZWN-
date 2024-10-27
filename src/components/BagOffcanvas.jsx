import React from "react";
import { Offcanvas, Button } from "react-bootstrap";

const BagOffcanvas = ({
  show,
  handleClose,
  bag,
  removeFromBag,
  increaseQuantity,
  decreaseQuantity,
  clearBag,
  isEmpty,
  bagTotal
}) => {
  const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      scroll
      backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Bag ({totalItems})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isEmpty ? (
          <p>Your bag is empty.</p>
        ) : (
          <>
            <ul className="list-group">
              {bag.map((item) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={item.id}
                >
                  <div>
                    <h6>{item.name}</h6>
                    <p>Price: {item.price} C$</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="ms-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => removeFromBag(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <h5>Total: {bagTotal} C$</h5>
              <Button variant="danger" onClick={clearBag} className="mt-2">
                Clear Bag
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BagOffcanvas;
