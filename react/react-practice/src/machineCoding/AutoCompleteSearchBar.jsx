import React, { useEffect, useState } from "react";

export default function AutoCompleteSearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache , setCache] = useState({})

  const fetchData = async () => {
    if(cache[input.trim()]){
        console.log("Cache Returned :"+input);
        setResult(cache[input.trim()])
        return 
    }

    console.log("API call :",input);
    const api = "https://dummyjson.com/recipes/search?q=";
    const data = await fetch(api + input.trim());
    const json = await data.json();
    setResult(json.recipes);
    setCache(prev=>({...prev, [input.trim()]:json.recipes}))
  };
  useEffect(() => {
   const timer = setTimeout(() => {
           
           fetchData();
   }, 400);

   return ()=>{
    clearTimeout(timer)
   }
  }, [input]);

  return (
    <div className="text-center">
      <h3 className="  text-xl text-bold ">Search</h3>
      <input
        type="text"
        className="border  border-1 w-1/2 px-3 mt-5 py-1"
        placeholder="Enter...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={()=>setShowResult(true)}
        onBlur={()=>setShowResult(false)}
      />
     {
        showResult &&  <div className="h-[300px] overflow-y-scroll bg-zinc-100 w-1/2 m-auto mt-1 text-left px-3 ">
        {  result.map((r) => (
          <span
            className="block py-1 hover:font-bold hover:bg-zinc-300 rounded-md px-3"
            key={r.id}
          >
            {r.name}
          </span>
        ))}
      </div>
     }
    </div>
  );
}
