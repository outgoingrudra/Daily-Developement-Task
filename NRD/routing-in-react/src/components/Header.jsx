import { Link } from "react-router-dom";
const Header =()=> {
    return(
        <div>
            <h1>Header</h1>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/grocery"><li>Grocery</li></Link>
              
            </ul>
        </div>
    )
}
    

export default Header;