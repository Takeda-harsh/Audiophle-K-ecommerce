/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Gallery = ({handleButtonClick}) => {
  // console.log(`this the handleButtonClick in gallery`,handleButtonClick)
  const speakerZX9Data = [
    {
      id: 1,
      slug: "ZX9 Speaker",
      category: "SPEAKER",
      image: "/resources/assets/home/desktop/image-speaker-zx9.png",
      mobileImage:"/resources/assets/home/mobile/image-speaker-zx9.png",
      tabletImage:"/resources/assets/home/tablet/image-speaker-zx9.png",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truely remarkable sound",
        patternimage: "/resources/assets/home/desktop/pattern-circles.svg",
     

    },
  ];

  const speakerZX7Data = [
    {
      id: 2,
      slug: "ZX7 Speaker",
      category: "SPEAKER",
      image: "/resources/assets/home/desktop/image-speaker-zx7.jpg",
      mobileImage:"/resources/assets/home/mobile/image-speaker-zx7.jpg",
      tabletImage:"/resources/assets/home/tablet/image-speaker-zx7.jpg",
    },
  ];

  const EarphoneYX1Data = [
    {
      id: 1,
      slug: "YX1 Wireless Earphones",
      category: "EARPHONES",
      image: "/resources/assets/home/desktop/image-earphones-yx1.jpg",
      mobileImage:"/resources/assets/home/mobile/image-earphones-yx1.jpg",
      tabletImage:"/resources/assets/home/tablet/image-earphones-yx1.jpg",
    },
  ];

  return (
    <>
    <div className=" min-h-full mx-[2rem] mt-10 md:mr-[2.55rem] md:ml-8 md:mt-28 lg:mx-[4.5rem] xl:mr-[8.5rem] xl:ml-[12rem] xl2:mr-[13rem] xl2:ml-[15.5rem]  2xl:mx-[25rem] 2xl:w-[1855px] ">
      <div className="rounded-md  h-[600px] lg:h-[400px] bg-orange xl:h-[600px] xl2:h-full 2xl:h-[900px] 2xl:mr-12">
      <div className="">
        {/* Content */}
        {speakerZX9Data.map((speaker) => (
          <div
            key={speaker.id}
            className="relative z-999 items-center  py-10 flex flex-col  md:items-center lg:flex-row lg:justify-center lg:gap-32 lg:px-20 "
          >
            {/* Pattern  Image */}
            <div className="absolute -top-8 md:-top-16  lg:w-2/3 lg:-left-20">
              <img src={speaker.patternimage} alt="pattern circles" />
            </div>
             {/* Speaker Image */}
            <div className="h-full">
              <img
                src={
                  window.innerWidth < 480
                    ? speaker.mobileImage
                    : window.innerWidth < 800
                    ? speaker.tabletImage
                    : speaker.image
                }
                alt={speaker.name}
                className="mb-2 w-40 md:w-50 relative md:top-[2rem] lg:top-[1.5rem] lg:w-[600px] xl:-left-8 xl:top-[8.5rem] xl2:-left-[1rem]  2xl:-left-[10rem] xl2:top-[3.4rem] 2xl:top-[9rem] "
              />
            </div>

            {/* Text content */}
            <div className="text-white text-center lg:text-start lg:relative  lg:left-16 lg:-top-6 xl:top-12 2xl:top-2">
              <div className="text-[36px] font-bold tracking-[1.3px] leading-9 mb-5 md:text-[48px] md:leading-[1em] lg:tracking-[2px] 2xl:tracking-[6px]  2xl:text-[56px] ">
                <div className="w-56 ml-8 tracking-[1.3px] md:w-64 lg:w-60 md:relative md:top-[4rem] md:left-[0rem] lg:top-[4rem] 2xl:top-[10rem] 2xl:w-[20rem] uppercase"
                >
                  {speaker.slug}
                </div>
              </div>
              <div className="text-[15px] mb-8 px-3 w-72 md:mb-8  md:relative md:top-[4rem] md:left-[1rem] lg:px-10 lg:ml-6 lg:-left-[2rem] lg:top-[4rem] 2xl:top-[10rem] 2xl:text-[24px] 2xl:w-[32rem] ">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable <br className="hidden" /> sound
              </div>
              {/* Product button */}
              <Link to={`/product/${speaker.slug}`}>
                <Button
                  className="bg-black px-6 py-3 font-bold   md:relative md:top-[4rem]  lg:hover:bg-lightgray lg:ml-10 2xl:top-[10rem] 2xl:text-[32px]"
                  onClick={() => handleButtonClick(speaker.slug)}
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
  

 

       <div className= "rounded-md h-[320px] md:mx-0 lg:-mx-[2.5rem] lg:my-10 xl:px-[1rem] xl2:relative xl2:-left-8 xl2:-mx-6 2xl:mx-[0rem] 2xl:-left-14 2xl:h-[48.5rem] 2xl:mt-32 ">
        {speakerZX7Data.map((speaker) => (
          <div
            key={speaker.id}
            className="items-center relative py-10  md:py-8 lg:flex-row md:object-right lg:items-center lg:justify-center lg:gap-20 lg:px-10 xl:px-6 xl2:px-2 xl2:left-8"
          > 
            {/* Speaker  ZX7 image */}
             <div className="h-72">
              <img
                src={ window.innerWidth < 480
                  ? speaker.mobileImage
                  :window.innerWidth < 800
                  ? speaker.tabletImage 
                  : speaker.image}
                alt={speaker.name}
                className=" rounded-md mb-5 md:w-screen md:h-72  lg:h-[20rem] xl2:h-[22rem] 2xl:h-[38rem] "
              />
            </div> 

            {/* text content */}
             <div className=" absolute top-32 text-black text-center w-64 h-64 md:h-[68px] 2xl:top-56 2xl:left-28">
              <div className="">
                <div className=" font-bold tracking-[2px] leading-10 mb-10 md:leading-[1em] md:font-bold md:mb-5 lg:tracking-[2px]">
                  <div className="font-black uppercase pt-8 text-[28px] 2xl:text-[32px] ">{speaker.slug} </div>
                  
                </div>
              </div> 
              {/* product button */}

               <Link to={`/product/${speaker.slug}`}>
                <Button className="bg-inherit border border-black -ml-10 px-6 py-3 text-black md:-ml-[3rem] font-bold lg:hover:bg-lightgray lg:-ml-10  lg:text-black 2xl:text-[32px]" onClick={() => handleButtonClick(speaker.slug)}>
                  SEE PRODUCT
                </Button>
              </Link> 
            </div>
          </div>
        ))}
      </div> 
        <div className="h-[300px] mt-28   md:mx-0 md:mt-10 lg:my-[7rem]  xl:mx-[1] xl2:mt-32 2xl:mt-8 2xl:h-[600px]">
        {EarphoneYX1Data.map((earphone) => (
          <div
            key={earphone.id}
            className="h-[200px]  md:grid md:grid-cols-2 md:py-0 lg:h-[400px] 2xl:h-[600px]"
          >  
            {/* Earphone image */}
              <div className=" h-64 ">
              <img
                 src={ window.innerWidth < 480
                  ? earphone.mobileImage
                  :window.innerWidth < 800
                  ? earphone.tabletImage 
                  : earphone.image}
                alt={earphone.name}
                className="rounded-md lg:w-full lg:h-[20rem] xl:h-[22rem] xl2:h-[25rem] 2xl:h-[40rem]"
              />
            </div>  

            {/* text content */}
                <div className="rounded-md  h-[200px] px-8 text-black bg-lightgray shadow-md -mt-6 
                md:absolute md:left-[26rem] md:top-[134.5rem] md:h-[325px] md:w-[310px] lg:left-[35rem] lg:top-[143rem] lg:h-[321px] lg:px-16 lg:w-[400px]   xl:w-[460px] xl:left-[42.7rem]  xl:top-[157.5rem] xl:h-[350px] xl2:left-[49rem] xl2:w-[450px] xl2:h-[400px] xl2:top-[157.5rem] 2xl:left-[87rem]  2xl:h-[646px]  2xl:top-[251rem] 2xl:w-[820px]"> 
              <div className="md:absolute md:left-12 md:-top-8 xl:left-24 "> 
                 <div className="text-[25px]  tracking-[1px] leading-8 my-8 md:leading-[1em] md:mb-5  lg:tracking-[2px]"> 
                  <div className="font-black uppercase pt-12 2xl:text-[32px]">{earphone.slug}</div> 
                  
                 </div> 
              </div> 
              {/* product button */}

              <Link to={`/product/${earphone.slug}`}>

                <Button className="bg-inherit border border-black ml-2  mb-2 px-6 py-3 text-black font-bold lg:hover:bg-lightgray md:relative  md:left-2 md:top-48 lg:top-[13rem] lg:-left-8 xl:left-4 lg:text-black 2xl:text-[32px] 2xl:top-64" onClick={() => handleButtonClick(earphone.slug)}>
                  SEE PRODUCT 
                 </Button>
              </Link>
            </div> 
           </div> 
       ))} 
        </div> 
    </div>
 
     
   
      
    </>
  );
};

export default Gallery;
