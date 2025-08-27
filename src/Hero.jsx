import React from "react";
import franciscoImg from './assets/francisco.jpg';
import blob from './assets/vecteezy_color-blob-banner_21971655.png'

export default function Hero() {
  return (
    <section className="lg:flex justify-center text-center lg:p-24 px-4 py-10 lg:gap-10 bg-gray-100 lg:h-156 items-center">
        <div className="flex justify-center">
            {/* <img src={franciscoImg} alt="Francisco Cuevas" className="rounded-full max-w-60 lg:max-w-100"/> */}
            <div
              style={{
                  WebkitMaskImage: `url(${blob})`,
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskImage: `url(${blob})`,
                  maskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  backgroundImage: `url(${franciscoImg})`,
                  backgroundSize: 'cover',
              }}
              className="min-w-[20rem] lg:min-w-[26rem] h-80 lg:h-100"
            />
            {/* <div className={`mask-[url(${blob})] bg-[url(${franciscoImg})] w-80 h-80 bg-red-100`}></div> */}
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="lg:text-7xl text-4xl py-6 font-medium">Francisco Cuevas</h2>
            <h3 className="lg:text-5xl text-2xl py-2">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto">
                Hello, thank you for check your my portfolio!
            </p>
        </div>
    </section>
  );
}