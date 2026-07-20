
import { useState } from "react";

export default function StarRatings() {
  const [ratings, setRatings] = useState(-1);
  const STAR_COUNT = 5;
  const stars = new Array(STAR_COUNT).fill(0);
  const YELLOW_STAR =
    "https://cdn.vectorstock.com/i/1000v/34/92/isolated-yellow-star-icon-ranking-mark-vector-18353492.jpg";
  const EMPTY_STAR = "https://cdn-icons-png.flaticon.com/512/4501/4501896.png";
  function handleStar(idx) {
    setRatings((prev) => (prev === idx ? -1 : idx));
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {stars.map((star, idx) => (
        <img
          key={idx}
          onClick={() => handleStar(idx)}
          className="star"
          src={ratings >= idx ? YELLOW_STAR : EMPTY_STAR}
          alt="star"
        />
      ))}
    </div>
  );
}

// CSS
// .star {
//   height: 50px;
//   margin-right: 2px;
// }
// .star:hover {
//   color: #000;
// }
