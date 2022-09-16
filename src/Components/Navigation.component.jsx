import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Usercontext } from "../context/User.context";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { signOutUser } from "../Utils/Firebase/Firebase";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { IconContext } from "../context/icon-context";
// import "../Navigation.component.jsx";
import {
  Navigations,
  NavLink,
  NavLinks,
  LogoContainer,
} from "../Navigation.component";
const Navigation = () => {
  const { currentUser } = useContext(Usercontext);
  const { click } = useContext(IconContext);
  const signOutHandler = async () => {
    await signOutUser();
    alert(`The user ${currentUser.email} has been signed out successfully`);
  };

  return (
    <Fragment>
      <Navigations>
        <LogoContainer className="logo-container" to="/">
          <div>{<Logo />}</div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>{" "}
          <NavLink to="/contact">CONTACT</NavLink>{" "}
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
          {click && <CartDropdown />}
        </NavLinks>
      </Navigations>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
