import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Nortification from "../../assets/icons/Topbar/Nortification.svg";
import Messagess from "../../assets/icons/Topbar/Messagess.svg";
import ProfileImg from "../../assets/icons/Topbar/PeterParker.png";
import "./Topbar.css";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const showSearchOnRoutes = ["/dashboard", "/settings"];
  const showSearch = showSearchOnRoutes.includes(location.pathname);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="topbar-container">
      <GiHamburgerMenu className="left-menu" />
      {/* Searhbar */}
      {showSearch ? <Searchbar /> : <div className="without-searchbar"></div>}

      <div className="profile-wrapper">
        {/* Nortification And Group Messagess */}

        <div className="topbar-icons">
          <span className="nortification-icon">
            <img src={Nortification} alt="Nortification" />
          </span>
          <span className="Messeges-icon">
            <img src={Messagess} alt="Messagess" />
          </span>
        </div>

        {/* Profile Section */}

        <div className="profile-section">
          <img src={ProfileImg} alt="" className="profile-img" />
          <span className="profile-name">Peter Parker</span>
        </div>

        {/* Dropdown Menu */}

        {isDropdownOpen && (
          <div className="dropdown-menu" onClick={toggleDropdown}>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li className="logout">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
