import React from "react";

export default function Age({ age }) {
  return (
    <div className="flex justify-center h-80 items-center">
      {age >= 18 ? (
        <span className=" text-3xl font-semibold  text-green-700 text-shadow-lg/30 ">
          You are elgible for vote
        </span>
      ) : (
        <span className=" text-3xl font-semibold  text-red-700 text-shadow-lg/30 ">
          You are not elgible for vote
        </span>
      )}
    </div>
  );
}



// export default function Age({ age }) {
//   return (
//     <div className="flex justify-center h-80 items-center">
      
//         <span className={"text-3xl font-semibold   text-shadow-lg/30 "+ (age >= 18 ? "text-green-700" : "text-red-700")}>
//           You are {age>=18 ? "" : "not"} elgible for vote
//         </span>
   
//     </div>
//   );
// }