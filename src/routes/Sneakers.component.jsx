import { useContext } from "react";
import { ProductContext } from "../context/product-context";
import { CartItemContext } from "../context/CartItem-context";
import Button from "../button/button.component";

const Sneakers = () => {
  const { product } = useContext(ProductContext);
  const { item, setItem } = useContext(CartItemContext);
  const sneakers = product.filter((x) => {
    return x.title.toLocaleLowerCase() === "sneakers";
  });
  console.log(sneakers);
  const { items } = sneakers[0];

  const addItem = (e) => {
    const obj = items.find((x) => {
      return Number(x.id) === Number(e.target.id);
    });

    if (
      !item
        .map((x) => {
          return x.id;
        })
        .includes(obj.id)
    ) {
      setItem([{ ...obj }, ...item]);
    } else {
      const index = item.findIndex((x) => x.id === Number(e.target.id));
      item[index].quantity = item[index].quantity + 1;
      setItem([...item]);
    }
  };

  return (
    <div className="products">
      {items.map((x) => {
        return (
          <div key={x.id} className="product-card-container">
            <img src={x.imageUrl}></img>
            <div className="footer">
              <span>{x.name}</span>
              <span>{x.price}</span>
              <Button id={x.id} buttontype="inverted" onClick={addItem}>
                Add To Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sneakers;
