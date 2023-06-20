import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#add6ef]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="-rotate-90 absolute top-[47px] left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <img src="../public/landingpage/e2.png" alt="Half Circle" className="w-auto h-72" />
        </div>
      </div>
      <div className="container mx-auto py-10 lg:py-14 relative">
        <div className="text-center flex flex-col gap-2 lg:gap-4">
          <h1 className="font-bold text-4xl lg:text-6xl mt-10">
            <span>Welcome to </span>
            <span className="text-[#2e46b2]  ">Incubyte</span>
          </h1>
          <p className="font-normal text-base lg:text-xl">
            Building bridges to success in the tech ecosystem.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="lg:w-[28rem] lg:h-[28rem] w-[24rem] h-[24rem] bg-[#94bae3] rounded-full">
            <img
              src="../public/landingpage/hero.png"
              alt="team"
              className="mt-10 w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute hidden lg:block -top-10 -right-28 w-auto h-screen flex justify-end items-center">
          <div className="rotate-270 ml-96">
            <img src="../public/landingpage/e2.png" alt="Half Circle" className="w-auto h-[calc(100vh - 100px)]" />
          </div>
        </div>
      </div>

      {/* Half circle between sections */}
      <div className=" mt-10">
        <div className="absolute  lg:top-[65%] z-50 left-0 transform -translate-y-1/2">
          <div className="-rotate-180">
            <img src="../public/landingpage/e2.png" alt="Half Circle" className="w-auto h-[10rem] lg:h-[30rem]" />
          </div>
        </div>
        <div className="bg-[#3c56b8] py-20">
          <div className="container mx-auto lg:text-center">
            <h1 className="text-white font-semibold text-3xl lg:text-4x text-center">About Us</h1>
            <p className="text-white text-sm lg:text-2xl mt-4 text-center px-2 lg:px-0">
              With over 3 years of experience, we at Incubyte specialize in setting up captive development centers for growing startups, addressing key challenges and providing tailor-made solutions for your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
