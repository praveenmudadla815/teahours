// src/components/FoodItem.js
import React from "react";

const FoodItem = ({ food, onAddToCart }) => {
  console.log(food, "food");
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{food.name}</h3>
        <p className="text-gray-600">
          {" "}
          Rating: {"⭐".repeat(Math.round(food.rating))}
        </p>
        {food.price !== undefined ? (
          <p className="text-gray-600">Price: ${food.price.toFixed(2)}</p>
        ) : (
          <p className="text-gray-600">Price: N/A</p>
        )}
        <button
          onClick={() => onAddToCart(food)}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
