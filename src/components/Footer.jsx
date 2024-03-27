/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo,useEffect } from "react";
import { Box, HStack, VStack, Container} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = ({data }) => {

  const socialIcons = {
    facebook: "/resources/assets/shared/desktop/icon-facebook.svg",
    instagram: "/resources/assets/shared/desktop/icon-instagram.svg",
    twitter: "/resources/assets/shared/desktop/icon-twitter.svg",
  };
  const categoryPaths = useMemo(
    () => ["/","/category/headphones", "/category/speakers", "/category/earphones"],
    []
  );

  const categoryTitles = useMemo(() => ["Home", "Headphones", "Speakers", "Earphones"], []);

  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const currentTab = data?.find((tab) => location.pathname.includes(tab.category.toLowerCase()));
    if (currentTab) {
      setActiveTab(currentTab.category);
    }  else {
      setActiveTab("Home");
    }
  }, [data]);

  const handleTabClick = (title) => {
    setActiveTab(title);
   
  };

  return (
    <Container
      mt={20}
      maxW={{ base: "container.sm", md: "container.md", lg: "container.lg",xl: "container.lg",xxl: "container.lg"}}
      className="relative bg-black text-white  md:h-88 lg:relative lg:top-[30rem]lg:h-96 2xl:top-[36rem]  "
    >
      <HStack
        spacing={{ base: 6, md: 8 }}
        justify={{ base: "center", md: "flex-start" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Box className="absolute top-0  md:left-12 w-[100px] h-[4px] bg-orange xl2:w-[160px] 2xl:left-[24rem] 2xl:w-[360px] 2xl:h-[10px]" ></Box>
        <Box minH="full">
          <VStack>
            <img
              src="../../resources/assets/shared/desktop/logo.svg"
              alt="companylogo"
              className="my-6 pt-4 md:-ml-[35rem] lg:-ml-[22rem] lg:pt-8  2xl:w-96 2xl:ml-[23rem] "
            />
            <VStack
              flexDir={{ base: "column", md: "row" }}
              className={`uppercase md:-ml-[25rem] lg:relative lg:-top-16 lg:left-[40rem] xl:left-[55rem] xl2:left-[65rem] md:mb-6 text-[13px] font-bold 2xl:text-[32px] 2xl:left-[105rem]`}
            >
              {categoryTitles.map((title) => (
              
          <Box
                key={title}
                as="h2"
                cursor="pointer"
                className={`lg:px-2 ${
                  activeTab === title ? "text-orange" : " text-white"
                }`}
                onClick={() => handleTabClick(title)}
              >
                {title === "Home" ? (
                  <Link to="/" className="text-md uppercase">Home</Link>
                ) : (
                  <Link to={categoryPaths[categoryTitles.indexOf(title)]} className="text-md uppercase">
                    {title}
                  </Link>
                )}
              </Box>
              ))}
            </VStack>
           

            <p className=" mt-10 md:ml-[1rem] lg:ml-2 lg:w-[32rem] md:mb-10 text-[15px] font-medium 2xl:text-[32px] 2xl:w-[37rem] 2xl:relative 2xl:left-[18rem]">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <Box>
              <VStack
                flexDir={{ base: "column", md: "row" }}
                className="lg:flex lg:space-between text-[15px] font-medium 2xl:text-[24px]"
              >
                 <p className=" my-10 md:-ml-[10rem] md:w-[25rem] lg:ml-[3rem] 2xl:relative 2xl:left-[17rem]">
                  Copyright 2021. All Rights Reserved
                </p>
               

                <VStack
                  flexDir="row"
                  className=" mt-2 md:ml-10 lg:relative lg:-top-28 lg:left-[20rem] xl:left-[34rem] xl2:left-[45rem] 2xl:left-[94rem] "
                >
                  {Object.entries(socialIcons).map(([key, value]) => (
                    <img key={key} src={value} alt={`${key} icon`}  className={`2xl:w-[3rem]`}/>
                  ))}
                </VStack>

               
              </VStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Footer;
