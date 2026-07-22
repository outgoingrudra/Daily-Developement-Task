import { useState } from "react";
export default function VirtualList({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const items = list.slice(indices[0], indices[1]);
  const handleScroll = (scrollTop) => {
    const newStart = Math.floor(scrollTop / itemHeight);
    const newEnd = newStart + Math.floor(height / itemHeight);
    setIndices([newStart, newEnd]);
  };
  return (
    <div>
      <div
        style={{ height, width, backgroundColor: "green", overflow: "auto" }}
        className=""
        onScroll={(e) => {
          handleScroll(e.target.scrollTop);
        }}
      >
        <div
          className=""
          style={{
            height: list.length * itemHeight,
            width: width,
            position: "relative",
          }}
        >
          {items.map((item, idx) => (
            <div
              style={{
                height: itemHeight,
                width: "100%",
                backgroundColor: "orange",
                borderTop: "1px solid black",
                position: "absolute",
                top: (indices[0] + idx) * itemHeight,
              }}
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
