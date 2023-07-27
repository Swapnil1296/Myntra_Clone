import React from "react";
import "./Navigationbar.css";
import logo from "./../../utensils/Myntra-Logo-PNG-ovjndf3.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const NavigationBar = () => {
  return (
    <>
      <div className="nav__container">
        <div>
          <img src={logo} className="logo__image" />
        </div>
        <div>Men</div>
        <div>Women</div>
        <div>Kid's</div>
        <div>Home & Living</div>
        <div>Beuty</div>
        <div>Studio</div>

        <div className="__searchbar_container">
          <div className="__searchbar">
            <div className="__search_icon">
              <SearchIcon />
            </div>
            <div className="__search_input">
              <input
                type="text"
                placeholder="Search for products,brands & more"
              />
            </div>
          </div>
        </div>
        <div className="__nav_profile">
          <div>
            <PersonOutlineIcon />
          </div>
          <div>
            <span>Profile</span>
          </div>
        </div>
        <div className="__nav_whishlist">
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <span>Whishlist</span>
          </div>
        </div>
        <div className="__nav_bag">
          <div>
            <LocalMallIcon />
          </div>
          <div>
            <span>Bag</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
