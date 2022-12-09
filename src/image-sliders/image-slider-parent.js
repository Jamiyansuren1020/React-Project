import React, { useState } from "react";
import pic1 from "./pictures/nature-1.jpg";
import pic2 from "./pictures/nature-2.jpg";
import pic3 from "./pictures/nature-3.jpg";
import pic4 from "./pictures/nature-4.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const ImageSlider = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div style={imageSliderStyle}>
        <button
          style={{ ...buttonStyle, left: '15px', top: "40%" }}
          onClick={() => {
            setCounter((c) => {
              return counter === 0 ? image.length - 1 : c - 1;
            });
          }}
        >
          <AiOutlineArrowLeft />
        </button>
        <img src={image[counter]} />
        <button
          style={{...buttonStyle, right: 15, top: '40%'}}
          onClick={() => {
            setCounter((c) => {
              return counter === image.length - 1 ? 0 : c + 1;
            });
          }}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

const image = [pic1, pic2, pic3, pic4];
export default ImageSlider;

const imageSliderStyle = {
  flexWrap: "wrap",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  maxWidth: 300,
  margin: '50px auto 0'
};
const buttonStyle = {
  display: "flex",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  alignSelf: "center",
  alignItems: "center",
  borderRadius: "15px",
  position: "absolute",
  opacity: "0.7",
};
