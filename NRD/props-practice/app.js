import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/fast-free-food-delivery_1208773-925.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
      <div className="hlist">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};


 const cars =  [
        {
            "_id": "6955097c6e2682d4b97e9cf2",
            "owner": "6950fa5adaffd586e7c996af",
            "brand": "BMW",
            "model": "X5",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/car_image2_Hsv4NwKPH0.png",
            "year": 2025,
            "category": "SUV",
            "seating_capacity": 3,
            "fuel_type": "Disel",
            "transmission": "Manual",
            "pricePerDay": 199,
            "location": "Los Angeles",
            "description": "Very attractive looks with powerful features",
            "isAvailable": true,
            "createdAt": "2025-12-31T11:31:08.593Z",
            "updatedAt": "2026-01-03T12:43:18.762Z",
            "__v": 0
        },
        {
            "_id": "6955e391f0f0b41c4f95aa1d",
            "owner": "6950fa5adaffd586e7c996af",
            "brand": "Tesla",
            "model": "C-4",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/car_image3_ZicULwITu.png",
            "year": 2026,
            "category": "Sedan",
            "seating_capacity": 5,
            "fuel_type": "Electric",
            "transmission": "Automatic",
            "pricePerDay": 149,
            "location": "Houstan",
            "description": "Electric car with automation technology . Beautiful look and glamorous moving ",
            "isAvailable": true,
            "createdAt": "2026-01-01T03:01:37.091Z",
            "updatedAt": "2026-01-01T03:01:37.091Z",
            "__v": 0
        },
        {
            "_id": "69562be3c31672a197ddcc3b",
            "owner": "69562a11b4516916e2794b1a",
            "brand": "Mercedes",
            "model": "Benz",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/1000296024_76lNZpEm8.jpg",
            "year": 2023,
            "category": "SUV",
            "seating_capacity": 4,
            "fuel_type": "Disel",
            "transmission": "Semi-Manual",
            "pricePerDay": 199,
            "location": "Chicago",
            "description": "Legacy of automotive excellence",
            "isAvailable": true,
            "createdAt": "2026-01-01T08:10:11.872Z",
            "updatedAt": "2026-01-01T08:10:11.872Z",
            "__v": 0
        },
        {
            "_id": "69564bc6c895e69844550ab0",
            "owner": "69562a11b4516916e2794b1a",
            "brand": "Toyota",
            "model": "E-Class",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/1000296022_wYC8tPfxR.jpg",
            "year": 2025,
            "category": "SUV",
            "seating_capacity": 5,
            "fuel_type": "Petrol",
            "transmission": "Manual",
            "pricePerDay": 129,
            "location": "New York",
            "description": "Very good looking with fine ride • Performance high ",
            "isAvailable": true,
            "createdAt": "2026-01-01T10:26:14.512Z",
            "updatedAt": "2026-01-01T10:26:14.512Z",
            "__v": 0
        },
        {
            "_id": "69567e9fe015d7ae20407354",
            "owner": "69567cd8e015d7ae20407329",
            "brand": "BMW",
            "model": "Z4",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/1a15cae6b01a3a76d30f7b717ec5bb02_ioTXn7TeT.jpg",
            "year": 2026,
            "category": "Sedan",
            "seating_capacity": 2,
            "fuel_type": "Disel",
            "transmission": "Automatic",
            "pricePerDay": 150,
            "location": "Los Angeles",
            "description": "very good car",
            "isAvailable": true,
            "createdAt": "2026-01-01T14:03:11.875Z",
            "updatedAt": "2026-01-03T08:46:01.127Z",
            "__v": 0
        },
        {
            "_id": "6957905b3b5cb69636d9f22a",
            "owner": "69578ce63b5cb69636d9f1e7",
            "brand": "Shutterstock",
            "model": "Toyota",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/1000233908_t1LFsy2dA.jpg",
            "year": 2,
            "category": "VAN",
            "seating_capacity": 6,
            "fuel_type": "Petrol",
            "transmission": "Manual",
            "pricePerDay": 122,
            "location": "New York",
            "description": "Car is very good. It will reach your destination safely and quickly.",
            "isAvailable": true,
            "createdAt": "2026-01-02T09:31:07.377Z",
            "updatedAt": "2026-01-02T09:31:07.377Z",
            "__v": 0
        },
        {
            "_id": "6958e32b94a1c5f54d672d64",
            "owner": "6950fa5adaffd586e7c996af",
            "brand": "Lamborghini",
            "model": "Z-3",
            "image": "https://ik.imagekit.io/rudra671/tr:w-1280:q-auto:f-webp/cars/car_Io42OlEho.jpeg",
            "year": 2022,
            "category": "SUV",
            "seating_capacity": 2,
            "fuel_type": "Hybrid",
            "transmission": "Semi-Manual",
            "pricePerDay": 219,
            "location": "Chicago",
            "description": "Lamborghini is an Italian manufacturer of luxury sports cars and SUVs, known for its performance, distinctive, aggressive design, and its current shift to a fully hybrid lineup. The company was founded by Ferruccio Lamborghini in 1963 and is now a subsidiary of the Volkswagen Group through Audi",
            "isAvailable": true,
            "createdAt": "2026-01-03T09:36:43.227Z",
            "updatedAt": "2026-01-03T09:36:43.227Z",
            "__v": 0
        }
    ]

const SearchBar =()=>{
    return (
        <div className="search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </div>
    )
}
const Carlayout = (props) => {
    const {data} = props

  return (
    <div className="card">
         Car-Name : {data["model"]} &nbsp; &nbsp; &nbsp;
         Car-Location : {data["location"]} &nbsp; &nbsp; &nbsp;
         Car-Price : {data["pricePerDay"]}
      
      </div>
)}

const Itemlist =()=>{
    return (
        <div>
            {
                cars.map((car,index)=><Carlayout data = {car} key={index}/>)
            }


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
