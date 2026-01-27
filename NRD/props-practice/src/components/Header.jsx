import { HEAD_LINK } from "../utils/constants";

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
        </ul>
      </div>
    </div>
  );
};

export default Header;