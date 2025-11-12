import React from "react";
import Iphone from "../assets/Iphone.png";
import Ellipse1 from "../assets/Ellipse24.png";
import Ellipse2 from "../assets/Ellipse26.png";
import Ellipse3 from "../assets/Ellipse28.png";
import Ellipse4 from "../assets/Ellipse25.png";
import Ellipse5 from "../assets/Ellipse27.png";
import Ellipse6 from "../assets/Ellipse29.png";

const HERO = () => {
  const logos = [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6];
  const leftSide = logos.slice(0, 3);
  const rightSide = logos.slice(3, 6);
  return (
    <>
      <div className="relative pb-72 sm:pb-30">
        <div className="relative flex justify-center  w-full h-[500px] overflow-hidden">
          <div className="flex flex-col items-end w-32 mt-12 space-y-9">
            {leftSide.map((data, index) => (
              <>
                <div key={index} style={{ marginRight: `${index * 30}px` }}>
                  <img src={data} className="w-12" />
                </div>
              </>
            ))}
          </div>
          <div className="mx-4">
            <img src={Iphone} alt="iPhone" className="w-40 md:w-56 z-10" />
          </div>
          <div className="flex flex-col items-start w-32 mt-12 space-y-9">
            {rightSide.map((data, index) => (
              <div key={index} style={{ marginLeft: `${index * 30}px` }}>
                <img src={data} className="w-12" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 bottom-0  w-full">
          <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl lg:text-5xl font-semibold mb-5 md:mb-10">
                Trusted By Millions, Built For You
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  py-8">
                <div>
                  <p className="text-sm opacity-80 mb-2">Total Downloads</p>
                  <h3 className="text-2xl md:text-5xl font-bold mb-1">29.6M</h3>
                  <p className="text-xs opacity-70">
                    2.1% More Than Last Month
                  </p>
                </div>

                <div>
                  <p className="text-sm opacity-80 mb-2">Total Reviews</p>
                  <h3 className="text-2xl md:text-5xl  font-bold mb-1">906K</h3>
                  <p className="text-xs opacity-70">65% More Than Last Month</p>
                </div>

                <div>
                  <p className="text-sm opacity-80 mb-2">Active Apps</p>
                  <h3 className="text-2xl md:text-5xl  font-bold mb-1">132+</h3>
                  <p className="text-xs opacity-70">31 More Still Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HERO;
