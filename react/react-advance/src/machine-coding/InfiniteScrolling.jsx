import { useState, useEffect } from "react";
import Post from "./Post.jsx";
export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=5&skip=" + pageNo * 6)
      .then((res) => res.json())
      .then((out) => {
        setData((prev) => [...prev, ...out.posts]);
        console.log(out);
      });
  }, [pageNo]);
  return (
    <div>
      Infinite Scrolll
      <Post data={data} setPageNo={setPageNo} />
    </div>
  );
}


import { useEffect } from "react";


// make a diff component for it 


export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const lastPost = document.querySelector(".posts:last-child");

    if (!lastPost) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Reached last post");
        setPageNo((prev) => prev + 1);
      }
    });

    observer.observe(lastPost);

    return () => observer.disconnect();
  }, [data, setPageNo]);

  return (
    <div>
      {data.map((post) => (
        <div className="posts" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
