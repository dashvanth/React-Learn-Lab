import biteFleetLogo from "../utils/Assets/bitefleet-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={biteFleetLogo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
