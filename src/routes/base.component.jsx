import { useContext } from "react";
import ProductCard from "../Components/Product-card";
import { ProductContext } from "../context/product-context";
import { useNavigate } from "react-router-dom";
import "../base.styles.scss";

const Base = () => {
  const { product } = useContext(ProductContext);
  const navigate = useNavigate();

  const handler = (e) => {
    navigate(`/shop/${e.target.title}`);
  };

  return (
    <div>
      {product.map((d) => {
        return (
          <div key={d.title}>
            <h1 className="title1">
              <span title={d.title} onClick={handler}>
                {d.title.toLocaleUpperCase()}
              </span>
            </h1>
            <hr />
            <div className="products">
              {d.items
                .filter((_, ind) => {
                  return ind < 4;
                })
                .map((x) => {
                  return <ProductCard key={x.id} props={x} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Base;
