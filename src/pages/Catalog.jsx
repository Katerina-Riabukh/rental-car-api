import { Outlet } from "react-router-dom";
import Filter from "../components/filter/Filter";
import CarsList from "../components/cars-list/CarsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../redux/fetch";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <Filter />
      <CarsList />
      <Outlet />
    </>
  );
};

export default Catalog;
