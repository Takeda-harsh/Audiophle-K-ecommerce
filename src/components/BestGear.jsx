/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const BestGear = () => {
  const aboutUs = {
    imageUrl: "/resources/assets/shared/desktop/image-best-gear.jpg",
    mobileImage: "/resources/assets/shared/desktop/image-best-gear.jpg",
    tabletImage: "/resources/assets/shared/tablet/image-best-gear.jpg",
    imageAlt: "Guy with earphones on",

    description:
      "Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
  };

  return (
    <Box mt={{base:"15rem",md:"12rem",lg:"14"}} mb={{base:"80",md:"2",lg:"80"}} className="px-3 ml-5 lg:grid lg:grid-cols-2 lg:h-80  xl2:h-96 w-[90%] md:w-[94%] lg:w-[95%]  md:relative  md:-left-[3rem] lg:-left-[10rem] ">
      {/* Image Section */}
      <img
        src={
          window.innerWidth < 480
            ? aboutUs.mobileImage
            : window.innerWidth < 800
            ? aboutUs.tabletImage
            : aboutUs.imageUrl
        }
        alt={aboutUs.imageAlt}
        className=" rounded-md md:h-[20rem] md:ml-12 md:w-full lg:h-[588px]  lg:order-2 order-1  lg:w-[400px] lg:ml-[14rem] xl:ml-[13.5rem] xl:w-[460px] xl2:mt-16  xl2:ml-[15rem] 2xl:px-0 2xl:ml-[18.5rem] 2xl:w-[850px] 2xl:h-[888px] "
      />

      {/* Text Section */}
      <Center>
        <Box>
          <Box mt={{base:'4', md:'8'}} fontWeight="extrabold" as="h4" className="lg:order-1 lg:ml-48 md:ml-14 xl:ml-[26rem] xl2:-ml-10 ">
            <Center>
              <Text
                size="md"
                marginInline={{ base: '10', md: '0'}}
                noOfLines={2}
                className="uppercase w-64 text-justify text-[28px] font-bold
                 md:w-[574px] md:text-[40px] md:text-center lg:text-[32px] lg:w-[20rem] lg:relative lg:left-10 xl2:w-96  lg:text-start  xl:text-[40px] xl:w-[25rem]  xl:left-3 xl2:text-[56px] xl2:left-80 xl2:w-[35rem] 2xl:left-64 2xl:w-[40rem]"
              >
                Bringing you the <span style={{ color: "orange" }}>best</span> audio gear
              </Text>
            </Center>
          </Box>
          <Center>
            <Box
              mt="2"
              fontWeight="semibold"
              as="h4"
              noOfLines={[12,14 ]}
              className="text-gray text-center md:items-center md:relative md:ml-14  md:h-[180px] lg:w-[25rem] lg:text-[14px] lg:h-[210px] lg:text-start lg:ml-[22rem]  xl:left-10  xl:w-[26rem] xl2:ml-[24rem] 2xl:w-[57rem] 2xl:text-[32px]  2xl:ml-[40rem] 2xl:h-[500px] "
            >
              {aboutUs.description}
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default BestGear;

