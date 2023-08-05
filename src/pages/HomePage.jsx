import React from 'react';
import hero from '../assets/hero.svg';
import workspace1 from '../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg';
import workspace2 from '../assets/mimi-thian--VHQ0cw2euA-unsplash.jpg';
import { logos } from '../Data';

const HomePage = () => {
  return (
    <div className="section font-[Poppins] md:pt-40 pt-24 min-h-screen">
      <div className="md:flex px-10 items-center lg:text-left text-center justify-center">
        <div className="">
          <div className="font-bold text-base text-teal-500 mb-4">Your E-Learning Partner</div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            SPACE <br /> Unleash Creativity, Embrace Mystery!
          </div>
          <p className="text-sm leading-7 text-gray-500 max-w-sm">
            Explore the wonders of illustration with SPACE. Unique and inspiring educational videos that open the imagination. Join a mysterious journey of creativity. Discover the potential of art and unforgettable stories. Welcome to
            SPACE, a limitless galaxy for imagination.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 mb-8 md:mb-0 font-bold text-[#00214d] bg-[#00ebc7] rounded-lg mr-4 text-sm">Start Learning Now</button>
            <button className="px-6 py-3 font-bold border border-solid text-[#00214d] border-[#00214d] rounded-lg text-sm">Discover</button>
          </div>
        </div>
        <div className="pt-10 lg:pt-0">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="py-10 px-5 md:w-1/2">
          <p className="text-center text-xl">
            We collaborate with <span className="text-teal-500">100+ leading universities ans companies</span>
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 p-2">
            {logos.map((logo, index) => (
              <div className="w-28" key={index}>
                <img src={logo} alt="" className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="py-10 px-5 md:w-1/2">
          <p className="text-center text-xl">
            We collaborate with <span className="text-teal-500">100+ leading universities ans companies</span>
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 p-2">
            {logos.map((logo, index) => (
              <div className="w-28" key={index}>
                <img src={logo} alt="" className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 mt-0 md:mt-10 px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-full items-center text-justify justify-center">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a passionate team dedicated to creating educational videos for learning illustration. Our mission is to make learning illustration fun, easy, and accessible to everyone, especially parents. Through our unique approach,
              we strive to make the learning process mysterious and gentle, sparking curiosity and creativity in young minds.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              At our core, we believe that learning should be an enjoyable journey, and our educational videos are carefully crafted to reflect this belief. We value simplicity, creativity, and the joy of discovery. By blending the art of
              storytelling with the art of illustration, we aim to inspire the next generation of young artists and problem solvers.
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:w-1/2 mt-8 px-10 gap-5 lg:mt-5">
            <img src={workspace1} alt="Team" className="rounded-lg w-full" />
            <img src={workspace2} alt="Team" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
