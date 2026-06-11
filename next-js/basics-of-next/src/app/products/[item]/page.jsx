"use client";

import { use } from "react";

export default function Item({ params }) {
  const { item } = use(params);

  return (
    <div>
      <h3 className="text-3xl">Item</h3>
      Name: {item}
    </div>
  );
}