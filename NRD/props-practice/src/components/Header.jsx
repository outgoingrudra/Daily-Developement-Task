import { HEAD_LINK } from "../utils/constants";
import Login from "./Login";

 const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <img src={HEAD_LINK} />
      </div>
      <div className="hlist">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li><Login/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;