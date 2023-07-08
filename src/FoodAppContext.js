import React, { useContext, useState } from "react";
import { restaurantsData } from "./Data";
import { useNavigate } from "react-router-dom";
export const FoodAppContext = React.createContext();

export const FoodAppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cuisine, setCuisine] = useState({ res: [], reviewFlag: false });
  const selectedCouisine = (CID) => {
    const getRestaurant = restaurantsData.filter(
      ({ cuisine_id }) => cuisine_id === CID
    );

    setCuisine({
      ...cuisine,
      res: getRestaurant,
      excomments: [],
      ratSelected: "",
      commentgiven: ""
    });
  };
  const getDetailsOfRestaurant = (resName) => {
    console.log(resName, "resName", `/${resName}`);
    navigate(`/restaurants/${resName}`);
  };
  const addReview = (val) => {
    setCuisine({ ...cuisine, reviewFlag: !val });
  };
  return (
    <FoodAppContext.Provider
      value={{
        selectedCouisine,
        cuisine,
        getDetailsOfRestaurant,
        navigate,
        addReview,
        setCuisine
      }}
    >
      {children}
    </FoodAppContext.Provider>
  );
};

const useFoodAppContext = () => useContext(FoodAppContext);
export default useFoodAppContext;
