import { useEffect, useState, useMemo } from "react";
import { products } from "../data/products.js";

const useBag = () => {
  const initialBag = () => {
    const localData = localStorage.getItem("bag"); // Ensure lowercase 'bag' for localStorage key
    return localData ? JSON.parse(localData) : [];
  };

  const [data, setData] = useState(products);
  const [bag, setBag] = useState(initialBag);

  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag)); // Ensure lowercase 'bag'
  }, [bag]);

  useEffect(() => {
    console.log("cargando datos");
    setData(products);
  }, []);

  function addToBag(item) {
    const itemExist = bag.findIndex((product) => product.id === item.id);
    if (itemExist >= 0) {
      console.log("El item ya existe en el Bag");
      const updatedBag = [...bag];
      updatedBag[itemExist].quantity++;
      setBag(updatedBag);
    } else {
      console.log("No existia...Agregando item al Bag");
      item.quantity = 1;
      setBag((prevBag) => [...prevBag, item]);
    }
  }

  function removeFromBag(id) {
    setBag((prevBag) => prevBag.filter((product) => product.id !== id));
  }

  function increaseQuantity(id) {
    const updatedBag = bag.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setBag(updatedBag);
  }

  function decreaseQuantity(id) {
    const updatedBag = bag.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setBag(updatedBag);
  }

  function clearBag() {
    setBag([]);
  }

  // Derived state
  const isEmpty = useMemo(() => bag.length === 0, [bag]);
  const bagTotal = useMemo(
    () => bag.reduce((total, item) => total + item.price * item.quantity, 0),
    [bag]
  );

  return {
    data,
    bag,
    addToBag,
    removeFromBag,
    increaseQuantity,
    decreaseQuantity,
    clearBag,
    isEmpty,
    bagTotal
  };
};

export default useBag;
