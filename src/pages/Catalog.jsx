import { Outlet } from "react-router-dom";
import Filter from "../components/filter/Filter";
import CarsList from "../components/cars-list/CarsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../redux/fetch";
import { Container } from "./pages.styled";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      <CarsList />
      <Outlet />
    </Container>
  );
};

export default Catalog;
