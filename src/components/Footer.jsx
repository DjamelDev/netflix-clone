import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="#" className="footer__social">
            <FacebookIcon />
          </a>
          <a href="#" className="footer__social">
            <InstagramIcon />
          </a>
          <a href="#" className="footer__social">
            <TwitterIcon />
          </a>
          <a href="#" className="footer__social">
            <YouTubeIcon />
          </a>
        </div>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="#">Audiodesription</a>
          </li>
          <li className="footer__link">
            <a href="#">Centre d'aide</a>
          </li>
          <li className="footer__link">
            <a href="#">Cartes cadeaux</a>
          </li>
          <li className="footer__link">
            <a href="#">Presse</a>
          </li>
          <li className="footer__link">
            <a href="#">Relations Investisseurs</a>
          </li>
          <li className="footer__link">
            <a href="#">Recrutement</a>
          </li>
          <li className="footer__link">
            <a href="#">Choix liés à la pub</a>
          </li>
          <li className="footer__link">
            <a href="#">Boutique Netflix</a>
          </li>{" "}
          <li className="footer__link">
            <a href="#">Informations légales</a>
          </li>
          <li className="footer__link">
            <a href="#">Conditions d'utilisation</a>
          </li>
          <li className="footer__link">
            <a href="#">Confidentialité</a>
          </li>
          <li className="footer__link">
            <a href="#">Préférences de cookies</a>
          </li>
          <li className="footer__link">
            <a href="#">Mentions légales</a>
          </li>
          <li className="footer__link">
            <a href="#">Nous contacter</a>
          </li>
        </ul>
        <button className="service__code">Code de service</button>
        <div className="footer__copy">© 1997-2024 Netflix, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
