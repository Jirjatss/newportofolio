import React from "react";
import babycare from "../../assets/babycare.jpeg";
import green from "../../assets/greenstore.PNG";
import port from "../../assets/port.PNG";
import movie from "../../assets/movie.PNG";
import CardProject from "../Card/CardProject";
import BMI from "../../assets/BMI.PNG";
import todo from "../../assets/todo.PNG";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="rounded  hover:text-[#01d193] flex absolute  top-1/2 -right-5" onClick={onClick}>
      ❯
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="rounded  hover:text-[#01d193] flex absolute  -left-5 top-1/2" onClick={onClick}>
      ❮
    </button>
  );
}

function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="font-signika p-10 pt-20  mx-auto" id="project">
      <div className="mb-10 text-4xl text-center">
        <span className="border-b-4 border-[#01d193] text-white">Project</span>
      </div>
      <div className="text-start px-2">
        <Slider {...settings}>
          <div>
            <CardProject gambar={babycare} nama={"Baby Care"} ket={"a website for mothers monitor and maintain baby's health optimally"} url={"https://babycarelove.netlify.app/"} tag={"Web"} tag2={"Application"} tag3={"Healthy"} />
          </div>
          <div>
            <CardProject
              gambar={green}
              w={"w-full"}
              nama={"Green Store"}
              ket={"Website to buy various kinds of fruits and vegetables available at any time"}
              url={"https://greenstoreindonesia.netlify.app/"}
              tag={"Web"}
              tag2={"Application"}
              tag3={"Shopping"}
            />
          </div>
          <div>
            <CardProject gambar={port} nama={"Web Portofolio"} ket={"An online portfolio (may also be called a digital portfolio or e-portfolio)"} url={"https://hijirsajad.netlify.app"} tag={"Web"} tag2={"Application"} tag3={"Portfolio"} />
          </div>
          <div>
            <CardProject
              gambar={movie}
              nama={"Jirjatss Movie"}
              ket={"website to see all kinds of movies in the world, the latest and the old ones"}
              url={"https://keen-travesseiro-fdac30.netlify.app/"}
              tag={"Web"}
              tag2={"Application"}
              tag3={"Movie"}
            />
          </div>
          <div>
            <CardProject
              gambar={BMI}
              nama={"BMI Calculator"}
              ket={"Body Mass Index is a simple calculation using a person’s height and weight."}
              url={"https://jirjatss-bmicalculator.netlify.app/"}
              tag={"Web"}
              tag2={"Application"}
              tag3={"Calculattor"}
            />
          </div>
          <div>
            <CardProject
              gambar={todo}
              nama={"To Do List"}
              ket={"part of the planning in the form of a set of tasks that must be done."}
              url={"https://reliable-lebkuchen-6853f3.netlify.app/"}
              tag={"Web"}
              tag2={"Application"}
              tag3={"To Do"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Project;
