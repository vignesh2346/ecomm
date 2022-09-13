import Home from "./routes/Home.component";
import Base from "./routes/base.component";
import Contact from "./Components/Contact.component";
import Signin from "./routes/Signin.component";
import Navigation from "./Components/Navigation.component";
import Checkout from "./Checkout/Checkout.component";
import { Routes, Route } from "react-router-dom";
import "./categories.styles.scss";

const App = () => {
  // const search = Home.querySelectorAll(".1");
  // console.log(search);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Base />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
