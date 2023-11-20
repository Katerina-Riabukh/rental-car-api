import { useSelector } from "react-redux";
import CartProduct from "../cart-product/CartProduct";
// import { store } from "../../redux/store";
// import { selectCars } from "../../redux/selectors";

const CarsList = () => {
  const cars = useSelector((state) => state.cars.cars);
  console.log(cars);
  //   const car = store.getState(cars);
  //   console.log(car);

  return (
    <ul>
      {cars.map((item) => {
        return <CartProduct item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default CarsList;
