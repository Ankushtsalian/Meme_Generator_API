import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../Styles/Input.css";
import Image from "./Image";

const Input = () => {
  const [allMeme, setMeme] = useState([]);
  const [img, setImg] = useState("https://i.imgflip.com/21uy0f.jpg");
  const [text, setText] = useState({
    top: "",
    bottom: "",
  });
  const a = async () => {
    const data = await fetch("https://api.imgflip.com/get_memes");
    const j = await data.json();
    setMeme(j.data.memes);
  };
  useEffect(() => a(), []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const u = allMeme[randomNumber].url;

    console.log(u);
    setImg(() => u);
    // setImg((pre) => ({ ...pre, rand: u }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev,[name]: value }));
  }

  return (
    <div className="form">
      <form>
        <div className="input">
          <input
            value={text.top}
            onChange={handleChange}
            placeholder="Top text"
            type="text"
            name="top"
          />
          <input
            onChange={handleChange}
            placeholder="Bottom text"
            type="text"
            value={text.bottom}
            name="bottom"
          />
        </div>
        <div className="button">
          <Button onClick={getImage} className="Button">
            Get a new meme Image
          </Button>
        </div>
        <Image text={text} img={img} />
      </form>
    </div>
  );
};

export default Input;
