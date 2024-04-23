import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../public/images/logo.svg";
import Avatar from "../../public/images/avatar.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  // scroll

  // burger

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? `nav--black` : "nav--transparen"
      } ${toggleMenu && `show`}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img
        src={Logo}
        alt="logo netflix"
        className="nav__logo"
        title="Logo Netflix"
      />
      <nav className="nav__links">
        <a href="#" className="nav__link">
          Accueil
        </a>
        <a href="#" className="nav__link">
          Séries
        </a>
        <a href="#" className="nav__link">
          Films
        </a>
        <a href="#" className="nav__link">
          Nouveautés les plus regardés
        </a>
        <a href="#" className="nav__link">
          Ma liste
        </a>
        <a href="#" className="nav__link">
          Explorer par langue
        </a>
      </nav>
      <div className="nav__actions">
        <a href="#" className="nav__action">
          <SearchIcon />
        </a>
        <a href="#" className="nav__action">
          <NotificationsNoneIcon />
        </a>
        <a href="#" className="nav__action">
          <img src={Avatar} alt="logo avatar" />
          <ArrowDropDownIcon className="nav__arrow" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
