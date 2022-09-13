import { useContext } from "react";
import ProductCard from "../Components/Product-card";
import { ProductContext } from "../context/product-context";
import "../base.styles.scss";
const Base = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="products">
      {product.map((d) => {
        return <ProductCard key={d.id} props={d} />;
      })}
    </div>
  );
};

export default Base;
