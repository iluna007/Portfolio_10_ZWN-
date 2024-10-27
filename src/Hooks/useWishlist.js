import { useState, useEffect } from "react";

const useWishlist = () => {
  const initialWishlist = () => {
    const localData = localStorage.getItem("wishlist");
    return localData ? JSON.parse(localData) : [];
  };

  const [wishlist, setWishlist] = useState(initialWishlist);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(item) {
    if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
    }
  }

  function clearWishlist() {
    setWishlist([]);
  }

  return { wishlist, addToWishlist, clearWishlist };
};

export default useWishlist;
