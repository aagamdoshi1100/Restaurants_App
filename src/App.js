import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import RestaurantPage from "./RestaurantPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:resId" element={<RestaurantPage />} />
      </Routes>
    </div>
  );
}
