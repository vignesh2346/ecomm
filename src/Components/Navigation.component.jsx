import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Usercontext } from "../context/User.context";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { signOutUser } from "../Utils/Firebase/Firebase";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { IconContext } from "../context/icon-context";
import "../Navigation.component.scss";
const Navigation = () => {
  const { currentUser } = useContext(Usercontext);
  const { click } = useContext(IconContext);
  const signOutHandler = async () => {
    await signOutUser();
    alert(`The user ${currentUser.email} has been signed out successfully`);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>{<Logo />}</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>{" "}
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>{" "}
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {click && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
