/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../components/Button";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import BestGear from "../components/BestGear";
import { Link } from "react-router-dom";




const Home = ({ data, handleButtonClick }) => {
  

  const productName = "XX99 Mark II Headphones";
  return (
    <>
   <div className="h-[600px] relative flex flex-col md:h-[600px] lg:flex-row justify-center items-center mb-0 md:mb-12 xl:h-[600px]  2xl:h-[1000px]">
   <hr   className=" relative -top-[19rem] z-20 w-full md:w-[90%] lg:w-[55rem]  xl2:w-[62rem] 2xl:w-[110rem] 2xl:-top-[31rem]"/>
      
      <div className="absolute md:left-22  lg:left-2 xl:left-32 xl2:left-40  2xl:left-80 text-white z-20 flex flex-col items-center lg:items-start">
    <small className="w-[300px] mt-12 ml-6 text-[16px] font-thin tracking-widest  md:mt-40  md:ml-[10rem] md:w-[450px] md:tracking-[16px]  lg:ml-[4rem]  2xl:text-2xl text-lightgray ">
      NEW PRODUCT
    </small>
    <h1 className="w-96 text-[36px] mt-6 ml-16 tracking-[8.3px] uppercase text-3xl md:text-[56px] md:ml-0  md:w-[400px] md:leading-[4rem] md:tracking-[2px] lg:ml-16  lg:w-[25rem]  font-bold  2xl:text-5xl ">
      XX99 Mark II Headphones
    </h1>
    <p className="font-medium w-80 mt-12  text-center text-[15px] tracking-wider leading-6  md:w-[400px] md:text-center md:mt-12 md:-ml-2 md:leading-7  lg:tracking-wide  lg:ml-16 lg:text-start lg:w-[360px]  2xl:text-[24px] 2xl:md:w-[400px] 2xl:leading-8 ">
      Experience natural, lifelike audio and exceptional build quality made
      for the passionate music enthusiast.
    </p>
          <Link to={`/product/${productName}`}>
            <Button
              onClick={() => handleButtonClick("", productName)}
              className="relative top-16 md:top-8 md:-left-2  lg:top-10 lg:left-16 bg-orange px-12 py-4 text-white text-md 2xl:text-3xl"
            >
              See Product
            </Button>
          </Link>
        </div>
   
 
        <div className="absolute z-0  md:-left-[34rem] md:mt-12  lg:left-0    ">
          <img
            srcSet="
  /resources/assets/home/mobile/image-header.jpg 640w,
  /resources/assets/home/tablet/image-header.jpg 780w,
  /resources/assets/home/desktop/image-hero.jpg 1024w
  "
            sizes="(max-width: 640px) 100vw,
  (max-width: 768px) ,
  1024px
  "
            src="/resources/assets/home/desktop/image-hero.jpg"
            alt="Hero Image"
            className=" h-[700px] object-cover md:h-[780px]  lg:h-[650px] xl:h-[680px]  2xl:h-[1240px] xl2:w-screen"
          />
        </div>
      </div>

      <div className="flex  text-black min-h-80 md:min-h-60 xl:min-h-80 2xl:mb-32">
        <Products data={data} />
      </div>
      <div className="">
        <Gallery handleButtonClick={handleButtonClick} data={data} />
      </div>
      <BestGear />
    </>
  );
};

export default Home;
