import "./cart-icon.styles.scss";
import { ReactComponent as Shopping } from "../assets/shopping-bag.svg";
import { useContext } from "react";
import { IconContext } from "../context/icon-context";
import { CartItemContext } from "../context/CartItem-context";

const CartIcon = () => {
  const { click, setClick } = useContext(IconContext);
  const { item } = useContext(CartItemContext);
  const setter = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const Quant = () => {
    const newArr = item
      .map((x) => {
        return x.quantity;
      })
      .reduce((acc, x) => {
        return acc + x;
      }, 0);
    return newArr;
  };

  return (
    <div className="cart-icon-container" onClick={setter}>
      <Shopping className="shopping-icon" />
      <span className="item-count">{Quant()}</span>
    </div>
  );
};

export default CartIcon;
