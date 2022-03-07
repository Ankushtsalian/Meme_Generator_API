import React from "react";

const Image = ({ img, text }) => {
  console.log(text);
  //   const { top, bottom } = text;
  //   console.log(top + "top");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "10px",
        color: "white",
      }}
    >
      <h2 style={{ position: "absolute" }}>{text.top}</h2>

      <h2 style={{ position: "absolute", marginTop: "250px" }}>
        {text.bottom}
      </h2>

      <img
        style={{ height: "300px", width: "450px", zIndex: "-1" }}
        src={img}
        alt="img"
      />
    </div>
  );
};
export default Image;
