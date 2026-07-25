import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const cache = useRef({});

  async function fetchData() {
    try {
      if (cache.current[input.trim()]) {
        //   console.log("Cache resulted :" + input);

        setItems(cache.current[input.trim()]);
        return;
      }
      setIsLoading(true);
      const output = await fetch(
        "https://dummyjson.com/products/search?q=" + input,
      );
      const res = await output.json();

      // console.log("Fetch resulted :" + input);
      //console.log(res);
      setItems(res.products);
      cache.current[input.trim()] = res.products;
      setIsLoading(false);
    } catch (error) {
        alert("Some Error Occurred")
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <header className="">
        <h3>Search Bar</h3>
      </header>
      <div className="search">
        <input
          type="text"
          className=""
          placeholder="Enter product.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="">
          Total items : <b> {items.length}</b>
          <div className="options">
            {items.map((item) => (
              <ItemContainer key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ItemContainer({ item }) {
  return (
    <div className="item-container">
      <div className="item-desc">
        <img src={item.images[0]} alt={item.title} className="item-img" />
        {item.title}
      </div>
      <span className="">{item.price}$</span>
    </div>
  );
}
