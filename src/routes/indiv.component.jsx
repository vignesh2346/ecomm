import { useContext } from "react";
import { ProductContext } from "../context/product-context";
import Button from "../button/button.component";
import { CartItemContext } from "../context/CartItem-context";

const Indiv = ({ props }) => {
  const id = props;
  const { product } = useContext(ProductContext);
  const { item, setItem } = useContext(CartItemContext);
  const items = product.map((x) => {
    return x.items;
  });

  const addItem = () => {
    for (let i = 0; i < items.length; i++) {
      const obj = items[i].find((x) => {
        return x.id === Number(id);
      });
      if (obj) {
        if (
          !item
            .map((x) => {
              return x.id;
            })
            .includes(obj.id)
        ) {
          setItem([{ ...obj }, ...item]);
        } else {
          const index = item.findIndex((x) => x.id === Number(id));
          item[index].quantity = item[index].quantity + 1;
          setItem([...item]);
        }
      }
    }
  };

  let obj1 = {};

  (() => {
    for (let i = 0; i < items.length; i++) {
      obj1 = items[i].find((x) => {
        return x.id === Number(id);
      });
      if (obj1) {
        break;
      }
    }
    return obj1;
  })();

  const { name, imageUrl, price } = obj1;

  return (
    <div>
      <h1>{`This page is for document id ${id}`}</h1>
      <h2>{`For the product ${name}`}</h2>
      <h2>{`with the price of ${price}`}</h2>
      <img src={imageUrl} alt={name}></img>
      <Button id={id} buttontype="inverted" onClick={addItem}>
        Add To Cart
      </Button>
    </div>
  );
};

export default Indiv;
