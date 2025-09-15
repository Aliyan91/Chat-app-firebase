import React from "react";
import "./LeftSideBar.css";
import assets from "../../assets/assets.js";

const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="logo" className="logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="menu" className="menu" />
          </div>
        </div>
        <div className="ls-search">
          <img
            src={assets.search_icon}
            alt="search"
            className="ls-search-icon"
          />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="ls_list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img
                src={assets.profile_img}
                alt="profile"
                className="profile-img"
              />
              <div>
                <p>Richard</p>
                <span>Hello, How are you?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
