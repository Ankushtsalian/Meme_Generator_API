import React from "react";
import "../Styles/Header.css";
import meme_face from "../Assets/meme-face.png";
const Header = () => {
  return (
    <div className="Header">
      <img className="meme_face_img" src={meme_face} alt="meme_face_img" />
      <h2>Meme Generator</h2>
    </div>
  );
};

export default Header;
