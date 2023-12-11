import { useSelector } from "react-redux";
import { UL } from "./CarsList.styled";
import CardItem from "../card-item/CardItem";
// import { useState } from "react";
// import { store } from "../../redux/store";
import { selectFilteredCars, selectCars } from "../../redux/selectors";

const CarsList = () => {
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  // const favorites = useSelector(selectFavorites);

  //   const car = store.getState(cars);
  //   console.log(car);

  return (
    <UL>
      {filteredCars.length !== 0
        ? filteredCars.map((item) => {
            return <CardItem item={item} key={item.id} />;
          })
        : cars.map((item) => {
            return <CardItem item={item} key={item.id} />;
          })}
    </UL>
  );
};

export default CarsList;
