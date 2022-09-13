import "../categories.styles.scss";

const Category = (props) => {
  const { cat } = props;
  return (
    <div key={cat.id} className="category-container">
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
