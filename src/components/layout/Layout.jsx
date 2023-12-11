import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./layout.styled";
// import Modal from "../modal/Modal";

const Layout = () => {
  return (
    <Container>
      {/* <Modal /> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <Outlet />
    </Container>
  );
};

export default Layout;
