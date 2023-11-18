import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <Outlet />
    </>
  );
};

export default Layout;
