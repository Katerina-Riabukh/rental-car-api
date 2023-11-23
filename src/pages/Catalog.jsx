import { Outlet } from "react-router-dom";
import Filter from "../components/filter/Filter";
import CarsList from "../components/cars-list/CarsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/fetch";
import { Container } from "./pages.styled";
import { selectBrand } from "../redux/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const brand = useSelector(selectBrand);
  console.log(brand);

  const [filteredCars, setfilteredCars] = useState([]);

  const getFilteredCars = (filteredCars) => {
    console.log(filteredCars);
    setfilteredCars(filteredCars);
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Filter getFilteredCars={getFilteredCars} />
      <CarsList filteredCars={filteredCars} />
      <Outlet />
    </Container>
  );
};

export default Catalog;
