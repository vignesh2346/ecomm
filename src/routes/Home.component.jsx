import CategoryData from "../Components/categoryData";
import Category from "../Components/category.component";

const Home = () => {
  const categories = CategoryData();
  return (
    <div className="categories-container">
      {categories.map((cat) => {
        return <Category key={cat.id} cat={cat} />;
      })}
    </div>
  );
};

export default Home;
