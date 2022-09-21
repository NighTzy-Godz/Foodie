import { Routes, Route } from "react-router-dom";

import "../static/css/main.css";
import HomePage from "./pages/Homepage";
import HomeSharedLayout from "./pages/HomeSharedLayout";
import MainFoodPages from "./pages/MainFoodPages";
import NavBar from "./common/Navbar";
import NotFound from "./common/Not-Found";

import About from "./pages/about";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<MainFoodPages />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
