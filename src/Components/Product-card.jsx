import "../product-card.styles.scss";
import { CartItemContext } from "../context/CartItem-context";
import { useContext, Fragment } from "react";
import { ProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import ProductContainer from "./ProductContainer.component";

const ProductCard = ({ props }) => {
  const { id, name, imageUrl, price } = props;
  const { item, setItem } = useContext(CartItemContext);
  const { product } = useContext(ProductContext);
  const navigate = useNavigate();
  const items = product.map((x) => {
    return x.items;
  });

  const addItem = () => {
    for (let i = 0; i < items.length; i++) {
      const obj = items[i].find((x) => {
        return x.id === id;
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
          const index = item.findIndex((x) => x.id === id);
          item[index].quantity = item[index].quantity + 1;
          setItem([...item]);
        }
      }
    }
  };

  const imageHandler = () => {
    navigate(`/item/${id}`);
  };

  return (
    <Fragment>
      <ProductContainer
        id={id}
        imageUrl={imageUrl}
        name={name}
        price={price}
        imageHandler={imageHandler}
        addItem={addItem}
      />
    </Fragment>
  );
};

export default ProductCard;
