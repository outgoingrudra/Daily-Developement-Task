import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Carrot" },
  { id: 4, name: "Milk" },
  { id: 5, name: "Bread" },
  { id: 6, name: "Eggs" },
  { id: 7, name: "Cheese" },
  { id: 8, name: "Butter" },
  { id: 9, name: "Tomato" },
  { id: 10, name: "Onion" },
];

const GroceryItems = () => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item.name));
    console.log("Clicked item:", item);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-3 text-center shadow-sm hover:bg-gray-50 hover:shadow-md transition"
        >
          {item.name}
        </div>
      ))}
     
    </div>
  );
};

export default GroceryItems;