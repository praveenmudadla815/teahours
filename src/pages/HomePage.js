import React from "react";
import ImageSlider from "../components/Slider";
import balckcoffie from "../assets/balckcoffie.jpg";
import Buttermilk from "../assets/Buttermilk.jpg";
import coffie from "../assets/coffie.jpg";
import colliesjpg from "../assets/colliesjpg.jpg";
import dumtea from "../assets/dumtea.jpg";
import GingerTea from "../assets/GingerTea.jpg";
import greentea from "../assets/greentea.jpg";
import haldigreen from "../assets/haldigreen.jpg";
import halditea from "../assets/halditea.jpg";
import lassi from "../assets/lassi.jpg";
import lemontea from "../assets/lemontea.jpg";
import Milkshakes from "../assets/Milkshakes.jpg";
import specialjpg from "../assets/specialjpg.jpg";
import zafran from "../assets/zafran.jpg";
import FoodList from "../components/FoodList";

const HomePage = () => {
  const images = [
    balckcoffie,
    Buttermilk,
    coffie,
    colliesjpg,
    dumtea,
    GingerTea,
    greentea,
    haldigreen,
    halditea,
    lassi,
    lemontea,
    Milkshakes,
    specialjpg,
    zafran,
  ];
  return (
    <div>
      <ImageSlider images={images} />
      <h1 className="mt-8"> Whats on Your Mind 🧑‍🦰</h1>
      <FoodList />
    </div>
  );
};

export default HomePage;
