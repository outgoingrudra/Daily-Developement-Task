import { cars } from "../utils/carData";
import Carlayout from "./CarLayout";
const Itemlist =()=>{

    
    return (
        <div>
            {
                cars.map((car,index)=><Carlayout data = {car} key={index}/>)
            }


        </div>
    )
}

export default Itemlist;