import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Restaurant, Address } from "./model/resturant";

let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheoi",
    detail: "somewhere",
    zipCode: 23425634,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
