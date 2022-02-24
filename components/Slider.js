import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider cursor-grab h-96">
          <div className="keen-slider__slide number-slide1 bg-black flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">1</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 bg-primary_orange-0 flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">2</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3 bg-black flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">3</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4 bg-primary_orange-0 flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">4</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5 bg-black flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">5</h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide6 bg-primary_orange-0 flex items-center justify-center">
            <div className="flex">
              <h1 className="text-4xl text-white">YOOOO</h1>
              <h1 className="text-4xl text-white">6</h1>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
};
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
