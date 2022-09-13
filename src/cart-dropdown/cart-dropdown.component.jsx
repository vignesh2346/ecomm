import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../Cart-item/Cart-Item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const handle = () => {
    const path = `/checkout`;
    navigate(path);
  };
  return (
    <div className="cart-dropdown-container">
      <CartItem className="cart-items" />
      <Button onClick={handle}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
