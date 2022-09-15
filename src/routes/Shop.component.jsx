import Base from "./base.component";
import Hats from "./AllCat.component";
import { Routes, Route, useParams } from "react-router-dom";
import Sneakers from "./Sneakers.component";

const Shop = () => {
  const categories = useParams();
  const [value] = Object.values(categories);
  return (
    <div>
      <Routes>
        <Route index element={<Base />}></Route>
        <Route path=":categories" element={<Hats props={value} />}></Route>
        {/* <Route path="/sneakers" element={<Sneakers />}></Route> */}
      </Routes>
    </div>
  );
};

export default Shop;
