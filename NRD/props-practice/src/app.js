import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header"
import Itemlist from "./components/Itemlist";



const SearchBar =()=>{
    return (
        <div className="search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </div>
    )
}


const AppLayout = () => {
  return (
    <div className="body">
      <Header />
      <br></br>
      <SearchBar/>
      <hr></hr>
      <Itemlist/>

      Hello From React
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
