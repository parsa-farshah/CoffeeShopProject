import React, { useEffect, useState } from "react";
import sliderImage from "../../../public/images/sliderIcon/coffeeSlider.png";
import Slider from "react-slick";

export default function AboutCoffee() {
  const [readMoreClick, setReadMoreClick] = useState(false);

  function handleClick() {
    setReadMoreClick(!readMoreClick);
  }

  console.log(readMoreClick);

  const readMore = (str, num) => {
    if (str.length > num) {
      return str.substr(0, num) + "...";
    } else {
      return str;
    }
  };

  const aboutCafe = [
    {
      id: 1,
      name: "capuccino",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum repellendus quo perferendis error eveniet atque deleniti vel nihil praesentium. Perferendis possimus",
      image: sliderImage,
    },
    {
      id: 2,
      name: "Hot Choccolate",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum repellendus quo perferendis error eveniet atque deleniti vel nihil praesentium. Perferendis possimus",
      image: sliderImage,
    },
    {
      id: 3,
      name: "Spersso",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum repellendus quo perferendis error eveniet atque deleniti vel nihil praesentium. Perferendis possimus",
      image: sliderImage,
    },
    {
      id: 4,
      name: "White Hot",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum repellendus quo perferendis error eveniet atque deleniti vel nihil praesentium. Perferendis possimus",
      image: sliderImage,
    },
    {
      id: 5,
      name: "Tea",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum repellendus quo perferendis error eveniet atque deleniti vel nihil praesentium. Perferendis possimus",
      image: sliderImage,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div id="about" className="w-full h-auto bg-gradient-to-l from-amber-950 to-amber-800 flex flex-col justify-center items-center py-20">
      <div>
        <h1 className="text-5xl md:text-8xl font-bebas text-amber-100">
          About Cafe
        </h1>
      </div>
      <div className="w-[80%] md:w-[70%] mt-6">
        <Slider {...settings}>
          {aboutCafe.map((data, id) => (
            <div className="flex justify-between " key={data.id}>
              <div className="bg-amber-100/50 gap-5 p-5 rounded-4xl mx-2">
                <img
                  className="w-[50px] md:w-[100px] place-self-center"
                  src={data.image}
                  alt={data.name}
                />
                <p
                  onClick={handleClick}
                  className="text-xs md:text-lg text-center text-black/70 mt-8"
                >
                  {readMoreClick
                    ? readMore(data.about)
                    : readMore(data.about, 50)}
                  <span className="text-blue-400 text-sm">
                    {readMoreClick ? <p>Read Less</p> : <p>Read More</p>}
                  </span>
                </p>
                <h1 className="text-xs md:text-2xl place-self-center font-extrabold playwrite pt-5">
                  {data.name}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
