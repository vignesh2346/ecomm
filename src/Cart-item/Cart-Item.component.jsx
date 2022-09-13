import "./Cart-Item.styles.scss";
import { useContext, Fragment } from "react";
import { CartItemContext } from "../context/CartItem-context";

const CartItem = ({ className }) => {
  const { item, setItem } = useContext(CartItemContext);

  const total = () => {
    const newArr = item.map((x) => {
      return [x.price, x.quantity];
    });
    let arr1 = [];
    for (let i = 0; i < newArr.length; i++) {
      const arr2 = newArr[i].reduce((acc, x) => {
        return acc * x;
      }, 1);
      arr1.push(arr2);
    }
    const tot = arr1.reduce((acc, x) => {
      return acc + x;
    }, 0);
    return tot;
  };

  const removeItem = (e) => {
    const indx = item.findIndex((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    item.splice(indx, 1);
    setItem(item.concat());
  };

  return (
    <div className={className}>
      {item.length !== 0 ? (
        <div>
          <h1>{"Items in your Cart"}</h1>
          {item.map((x) => {
            return (
              <div key={x.id}>
                <img src={x.imageUrl}></img>
                <h3>{`${x.quantity} x $${x.price}`}</h3>
                <span id={x.id} className="closing" onClick={removeItem}>
                  {" "}
                  X
                </span>
                <h2>{x.name}</h2>
              </div>
            );
          })}
          <h4>{`Total: `}</h4>
          <span className="amount">{`$${total()}`}</span>
        </div>
      ) : (
        <p>{"Your Cart is Empty"}</p>
      )}
    </div>
  );
};

export default CartItem;
