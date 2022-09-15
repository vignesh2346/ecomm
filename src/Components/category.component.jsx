import "../categories.styles.scss";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
  const { cat } = props;
  const navigate = useNavigate();
  const handle = () => {
    navigate(`/shop/${cat.title}`);
  };
  return (
    <div key={cat.id} className="category-container" onClick={handle}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${cat.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{cat.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
