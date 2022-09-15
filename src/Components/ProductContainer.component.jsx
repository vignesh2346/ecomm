import Button from "../button/button.component";

const ProductContainer = ({
  id,
  name,
  price,
  imageHandler,
  imageUrl,
  addItem,
}) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} id={id} onClick={imageHandler} alt={name}></img>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
        <Button id={id} buttontype="inverted" onClick={addItem}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductContainer;
