import UserClass from "../components/UserClass";
import UserClass2 from "../components/UserClass2";
import UserClass3 from "../components/UserClass3";
import Rcart from "./Rcart";

const Home =()=>{
    return (
        <div>
        <h1>Welcome to Our Website !!! </h1>
        <UserClass/>
        <UserClass2 name="Rudra" age={25}/>
        <UserClass3/>
        </div>
    )
}

export default Home;