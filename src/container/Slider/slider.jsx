import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import data from "../../constants/data";
import "./slider.css";
import image1 from "../../assets/Background-1.png";
import image2 from "../../assets/Background.png";
import ArrowL from "../../assets/Arrow.png";

const Slider = () => {
  const scrollref = React.useRef(null);
  const [Scroll, setScroll] = useState(null);
  const [image, setimage] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 950) {
      setimage(image2);
      setScroll(350);
    } else {
      setimage(image1);
      setScroll(800);
    }
  }, []);

  const scroll = (direction) => {
    // setScroll(800);
    const { current } = scrollref;
    if (direction === "left") {
      // console.log(Scroll);
      current.scrollLeft -= Scroll;
    } else {
      // console.log(Scroll);
      current.scrollLeft += Scroll;
    }
  };

  return (
    <div className="cards">
      <div className="app__testimonials " ref={scrollref}>
        {data.map((data, index) => (
          <Card
            key={`student-${index + 1}`}
            Name={data.name}
            Id={data.id}
            Description={data.description}
            Education={data.education}
          />
        ))}
      </div>

      <div className="buttons">
        <div className="app__gallery-images_arrow">
          <div className="gallery__arrow-icon">
            <img
              src={ArrowL}
              className="gallery__arrow-iconR "
              onClick={() => scroll("right")}
              alt="arrow"
            />
          </div>
          <div className="gallery__arrow-icon">
            <img
              src={ArrowL}
              className="gallery__arrow-iconL"
              onClick={() => scroll("left")}
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="bg-box"></div>

      <div className="Bg-image">
        <img src={image} alt="Background" />
      </div>
    </div>
  );
};

export default Slider;
