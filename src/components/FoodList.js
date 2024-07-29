// src/components/FoodList.js
import React, { Suspense, lazy, useState, useEffect } from "react";
import axios from "axios";
import SkeletonLoader from "./SkeletonLoader";

const FoodItem = lazy(() => import("./FoodItem"));

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/foods");
        console.log(response.data, "data");
        setFoods(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching foods:", error);
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const handleAddToCart = (food) => {
    console.log("Add to cart", food);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        : foods.map((food) => (
            <Suspense fallback={<SkeletonLoader />} key={food._id}>
              <FoodItem food={food} onAddToCart={handleAddToCart} />
            </Suspense>
          ))}
    </div>
  );
};

export default FoodList;
