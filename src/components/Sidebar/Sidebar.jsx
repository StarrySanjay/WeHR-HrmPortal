import { SidebarItems } from "../../utils/SidebarData";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2 className="Logo">We HR</h2>
      <div className="first-menu">
        <ul className="menu-wrapper">
          {SidebarItems.slice(0, 6).map((items, index) => {
            return (
              <li key={index} className="menu-items">
                <NavLink
                  to={items.link}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {({ isActive }) => (
                    <div className="navlink-content">
                      <img
                        src={
                          isActive ? items.activeIcon || items.icon : items.icon
                        }
                        alt={items.title}
                        className="Sidebar-icon"
                      />
                      <span>{items.title}</span>
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Support and Settings Menu */}

        <div className="second-menu">
          <ul className="menu-wrapper">
            <span className="other-items">other</span>
            {SidebarItems.slice(6, 8).map((items, index) => {
              return (
                <li key={index} className="menu-items">
                  <NavLink
                    to={items.link}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {({ isActive }) => (
                      <div className="navlink-content">
                        <img
                          src={
                            isActive
                              ? items.activeIcon || items.icon
                              : items.icon
                          }
                          alt={items.title}
                          className="Sidebar-icon"
                        />
                        <span>{items.title}</span>
                      </div>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
