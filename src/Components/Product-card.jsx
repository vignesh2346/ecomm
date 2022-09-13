import Button from "../button/button.component";
import "../product-card.styles.scss";
import { CartItemContext } from "../context/CartItem-context";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";

const ProductCard = ({ props }) => {
  const { id, name, imageUrl, price } = props;
  const { item, setItem } = useContext(CartItemContext);
  const { product } = useContext(ProductContext);

  const addItem = () => {
    const obj = product.find((x) => {
      return x.id === id;
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
      const index = item.findIndex((x) => x.id === id);
      item[index].quantity = item[index].quantity + 1;
      setItem([...item]);
    }
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl}></img>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
        <Button buttontype="inverted" onClick={addItem}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
