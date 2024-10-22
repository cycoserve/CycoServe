import * as React from "react";

function SecondHero() {
  return (
    <div className="flex flex-col text-4xl text-center text-black bg-white">
      <div className="w-full bg-black min-h-[70px] max-md:max-w-full" />
      <div className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-32 mb-32 w-full max-w-[1151px] max-md:my-10 max-md:max-w-full">
          <div className="text-8xl font-bold max-md:max-w-full max-md:text-4xl">
            Unleash the Power of Innovation
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            Embark on a journey where creativity meets technology. Transform
            your ideas into reality with our cutting-edge solutions.
          </div>
          <div className="justify-center px-12 py-5 mt-14 text-white rounded-2xl max-md:px-5 max-md:mt-10">
            Start Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHero;


