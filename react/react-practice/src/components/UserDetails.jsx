
export default function UserDetails({user}){

   return (
    <div className="w-[300px] border border-1 p-2" >
          <h3 className="text-xl font-semibold text-center"> {user.id}. {user.name}</h3>
           <h5 className="text-gray-500 text-sm "> Username : {user.username.toLowerCase()}</h5>
           <h5 className="text-gray-500 text-sm "> <a href={`mailto:${user.email}`}>Email : {user.email}</a></h5>
            <div>
                <h5 className="text-md text-gray-600">Address : </h5>
                <div className="pl-3">
                <h6 className="text-gray-500 text-sm">Street : {user.address.street}</h6>
                <h6 className="text-gray-500 text-sm">Suite : {user.address.suite}</h6>
                <h6 className="text-gray-500 text-sm">City : {user.address.city}</h6>
                <h6 className="text-gray-500 text-sm">Zipcode : {user.address.zipcode}</h6>
                <h6 className="text-gray-500 text-sm">Geo : Lat : {user.address.geo.lat} | Lng : {user.address.geo.lng}</h6>
            </div>
            <h5 className="text-gray-500 text-sm ">Mobile : {user.phone}</h5>
            <h5 className="text-gray-500 text-sm ">Company : <b>{user.company.name}</b></h5>
            <h5 className=" text-sm  text-blue-600 cursor-pointer  "><a href={user.website}>Go to Website</a></h5>

            </div>
    </div>
   )

}




// export default function UserDetails({ user }) {
//   return (
//     <div className="w-[320px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
//       {/* Header */}
//       <div className="flex flex-col items-center text-center pb-4 border-b border-gray-100">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
//           {user.name.charAt(0)}
//         </div>
//         <h3 className="mt-3 text-lg font-semibold text-gray-900">
//           {user.name}
//         </h3>
//         <span className="text-xs font-medium text-gray-400">
//           #{user.id} · @{user.username.toLowerCase()}
//         </span>
//       </div>

//       {/* Contact */}
//       <div className="mt-4 space-y-2">
        
//           <a href={`mailto:${user.email}`}
//           className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
//         >
//           <span className="font-medium text-gray-700">Email:</span> {user.email}
//         </a>
//         <p className="text-sm text-gray-600">
//           <span className="font-medium text-gray-700">Mobile:</span> {user.phone}
//         </p>
//         <p className="text-sm text-gray-600">
//           <span className="font-medium text-gray-700">Company:</span>{" "}
//           <span className="font-semibold text-gray-800">{user.company.name}</span>
//         </p>
//       </div>

//       {/* Address */}
//       <div className="mt-4 rounded-xl bg-gray-50 p-3">
//         <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
//           Address
//         </h4>
//         <div className="space-y-1 text-sm text-gray-600">
//           <p>{user.address.street}, {user.address.suite}</p>
//           <p>{user.address.city}, {user.address.zipcode}</p>
//           <p className="text-xs text-gray-400">
//             Lat: {user.address.geo.lat} · Lng: {user.address.geo.lng}
//           </p>
//         </div>
//       </div>

//       {/* Website */}
      
//        <a href={user.website}
//         target="_blank"
//         rel="noreferrer"
//         className="mt-4 block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-700"
//       >
//         Visit Website
//       </a>
//     </div>
//   );
// }