import { Route, Routes, useParams } from "react-router-dom";
import Indiv from "./indiv.component";
const Item = () => {
  const id = useParams();
  const [value] = Object.values(id);
  return (
    <Routes>
      <Route path=":id" element={<Indiv props={value} />}></Route>
    </Routes>
  );
};

export default Item;
