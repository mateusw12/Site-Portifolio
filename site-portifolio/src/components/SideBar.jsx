import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import { menuItems } from "../utils/constants";

const SideBar = ({
  selectedMenuItem,
  setSelectedMenuItem,
  handleSidebarCollapse,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    handleSidebarCollapse(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="profile-image-container">
        <img
          className="profile-image"
          src="https://avatars.githubusercontent.com/u/38771418?v=4"
          alt=""
          title="Mateus Walz"
        />
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mateus-walz-b40866137/"
          className="social-media-item"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <FaLinkedin className="social-media-link" />
        </a>
        <a
          href="https://github.com/mateusw12"
          className="social-media-item"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithubSquare className="social-media-link" />
        </a>
        <a
          href="https://www.facebook.com/mateus.walz/"
          className="social-media-item"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookSquare className="social-media-link" />
        </a>
        <a
          href="https://www.instagram.com/mateus_w12/"
          className="social-media-item"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagramSquare className="social-media-link" />
        </a>
      </div>
      <ul>
        {menuItems.map((menuItem) => (
          <Link
            to={menuItem.link}
            className="menu-item-btn"
            style={{
              background: menuItem.name === selectedMenuItem && "#FC1503",
            }}
            key={menuItem.name}
          >
            <span
              style={{
                color: menuItem.name === selectedMenuItem ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {menuItem.icon}
            </span>
            <span
              className="button-color-text"
              style={{
                opacity: menuItem.name === selectedMenuItem ? "1" : "0.8",
              }}
            >
              {menuItem.name}
            </span>
          </Link>
        ))}
      </ul>

      <div className="sidebar-footer collapse-btn" onClick={toggleCollapsed}>
        {collapsed ? (
          <BsFillArrowRightCircleFill />
        ) : (
          <BsFillArrowLeftCircleFill />
        )}
      </div>
    </div>
  );
};

export default SideBar;
