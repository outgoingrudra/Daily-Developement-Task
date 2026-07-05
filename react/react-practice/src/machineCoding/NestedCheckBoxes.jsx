import React, { useState } from "react";

export default function NestedCheckBoxes() {
  const data = {
    id: 1,
    name: "Food",
    children: [
      {
        id: 2,
        name: "Fruits",
        children: [
          {
            id: 3,
            name: "Apple",
            children: [],
          },
          {
            id: 4,
            name: "Banana",
            children: [],
          },
          {
            id: 5,
            name: "Mango",
            children: [],
          },
        ],
      },
      {
        id: 6,
        name: "Vegetables",
        children: [
          {
            id: 7,
            name: "Potato",
            children: [],
          },
          {
            id: 8,
            name: "Tomato",
            children: [],
          },
        ],
      },
      {
        id: 9,
        name: "Drinks",
        children: [
          {
            id: 10,
            name: "Tea",
            children: [],
          },
          {
            id: 11,
            name: "Coffee",
            children: [],
          },
          {
            id: 12,
            name: "Juice",
            children: [],
          },
        ],
      },
    ],
  };

  const [checked, setChecked] = useState({ 1: true });
  return (
    <div className="m-5">
      <CheckBoxes node={data} checked={checked} setChecked={setChecked} />
    </div>
  );
}

function CheckBoxes({ node, parent, checked, setChecked }) {
  function handleChange(val, node) {
    const newList = { ...checked, [node.id]: val };

    function Driling(node, val) {
      if (!node) return;

      newList[node.id] = val;

      node.children.forEach((child) => {
        Driling(child, val);
      });
    }

    Driling(node, val);

    if (parent) {
      const allChecked = parent.children.every((child) => newList[child.id]);

      const allUnchecked = parent.children.every((child) => !newList[child.id]);

      if (allChecked) {
        newList[parent.id] = true;
      } else if (allUnchecked) {
        newList[parent.id] = false;
      }
    }
    setChecked(newList);
  }
  console.log(checked);

  return (
    <div className="mx-8">
      <input
        type="checkbox"
        checked={checked[node.id] || false}
        onChange={(e) => handleChange(e.target.checked, node)}
      />
      <span className="font-semibold">{node.name}</span>
      {node.children.map((child) => (
        <div key={child.id}>
          <CheckBoxes
            node={child}
            parent={node}
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      ))}
    </div>
  );
}
