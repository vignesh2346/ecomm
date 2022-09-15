import "./Checkout.styles.scss";
import { CartItemContext } from "../context/CartItem-context";
import { useContext } from "react";

const Checkout = () => {
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

  const inc = (e) => {
    const exist = item.find((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    if (exist) {
      const newArr = item.map((x) => {
        if (Number(x.id) === Number(e.target.id)) {
          x.quantity = x.quantity + 1;
          return x;
        } else {
          return x;
        }
      });

      setItem(newArr);
    } else {
      setItem([...item]);
    }
  };

  const dec = (e) => {
    const exist = item.find((x) => {
      return Number(x.id) === Number(e.target.id);
    });
    if (exist) {
      const newArr = item
        .map((x) => {
          if (Number(x.id) === Number(e.target.id)) {
            x.quantity = x.quantity - 1;
            return x;
          } else {
            return x;
          }
        })
        .filter((x) => {
          return x.quantity > 0;
        });

      setItem(newArr);
    } else {
      setItem([...item]);
    }
  };

  return (
    <div>
      {item.length !== 0 ? (
        <div className="checkout-page">
          <h1 className="checkout-header">{"Items in your Cart"}</h1>
          {item.map((x) => {
            return (
              <div className="checkout-container" key={x.id}>
                <img className="checkout-image" src={x.imageUrl}></img>
                <h3 className="checkout-price">
                  <span id={x.id} className="dec" onClick={dec}>{`< `}</span>
                  {`${x.quantity}`}
                  <span id={x.id} className="inc" onClick={inc}>
                    {` >`}{" "}
                  </span>
                </h3>
                <h3>{`${x.price}`}</h3>
                <span
                  id={x.id}
                  className="checkout-closing"
                  onClick={removeItem}
                >
                  {" "}
                  X
                </span>

                <h2 className="checkout-name">{x.name}</h2>
                <hr></hr>
              </div>
            );
          })}
          <h4 className="checkout-total">{`Total: `}</h4>
          <span className="checkout-amount">{`$${total()}`}</span>
        </div>
      ) : (
        <p>{"Your Cart is Empty"}</p>
      )}
    </div>
  );
};

export default Checkout;
