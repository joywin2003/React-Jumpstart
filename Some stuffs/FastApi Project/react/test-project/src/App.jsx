import React from "react";

const SearchBar = () => {
  const addCartHandler = async (cartitem) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/add_cart/",
        {
          method: "POST",
          body: JSON.stringify(cartitem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error adding item to cart.");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleFetch = () => {
    const cartitem = {
      id: 500,
      title: 'To Kill a Mockingbird',
      price: 12.99,
      amount: 1,
    };
    console.log(cartitem);
    addCartHandler(cartitem);
  };

  return (
    <div className="input-wrapper">
      <button onClick={handleFetch}>Add to Cart</button>
    </div>
  );
};

export default SearchBar;
