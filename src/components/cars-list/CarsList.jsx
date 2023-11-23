import { useSelector } from "react-redux";
// import CardProduct from "../card-product/CardProduct";
import { UL } from "./CarsList.styled";
import CardItem from "../card-item/CardItem";
// import { useState } from "react";
// import { store } from "../../redux/store";
// import { selectCars } from "../../redux/selectors";

const CarsList = ({ filteredCars }) => {
  const cars = useSelector((state) => state.cars.cars);

  //   const car = store.getState(cars);
  //   console.log(car);

  return (
    <UL>
      {cars.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </UL>
  );
};

export default CarsList;
