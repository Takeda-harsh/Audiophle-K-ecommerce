/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Center, Text, Stack, VStack, Image } from "@chakra-ui/react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductCard = ({ handleButtonClick, categoryProducts }) => {
  const isNew = (categoryProducts) => {
    if (categoryProducts.new === true) {
      return "New Product";
    } else {
      return "";
    }
  };

  return (
    <>
      <Box>
        {categoryProducts.map((product, index) => (
          <Box
            key={index}
            mt={20}
            mb={{ base: "20", md: "0" }}
            className="px-3 ml-4  h-[40rem] relative  lg:grid lg:grid-cols-2 lg:h-[26rem] lg:w-[80%] lg:ml-10 xl2:h-[588px] w-[92%] md:ml-8 md:min-h-[49rem]  xl:w-[70%] xl:h-[32rem] xl:left-28 xl2:w-[70%] xl2:ml-[7rem] 2xl:w-[60%] 2xl:ml-64  2xl:mb-[10rem] 2xl:h-[50rem] 2xl:left-32 "
          >
            {/* Image Section */}
            <Center
              className={`order-${index % 2 === 0 ? "2" : ""} lg:order-${
                index % 2 === 0 ? "1" : "2"
              } 2xl:mb-8 xl2:m-[40px] `}
            >
              <Image
                src={product.image.desktop}
                srcSet={`
               ${product.image.mobile} 480w,
               ${product.image.tablet} 800w,
               ${product.image.desktop} 1200w
             `}
                sizes="(max-width: 480px) 480px,
                    (max-width: 800px) 800px
                    1200px"
                alt={product.name}
                className=" h-[20rem] w-full object-cover bg-lightgray  md:h-[20rem] md:w-[70rem] md:object-scale-down md:lg:h-full lg:order-2 order-1  lg:ml-20 xl2:ml-0  lg:object-contain  "
              />
            </Center>

            {/* Text Section */}

            <Center
              className={`order-${index % 2 === 0 ? "0" : "1"} lg:order-${
                index % 2 === 0 ? "1" : "0"
              } mt-0 lg:mt-0  flex flex-col 2xl:ml-6 `}
            >
              <Stack flexDir={{ base: "column", lg: "row" }}>
                <Box>
                  <Box
                    flexDir={{ base: "column", lg: "row" }}
                    mt="4"
                    fontWeight="extrabold"
                    as="h4"
                    className="md:w-[40rem]  xl2:justify-around  lg:ml-14 xl2:-ml-8  "
                  >
                    <Center>
                      <VStack flexDir={{ base: "column" }}>
                        <Text
                        fontSize={{ base: "14px", "2xl": "28px" }}
                      
                          style={{
                            fontFamily: "Manrope",
                            
                            fontWeight: "regular",
                            textTransform: "uppercase",
                          }}
                          className="text-orange tracking-widest lg:leading-[10px] lg:ml-12 lg:w-[280px] 2xl:w-[480px] 2xl:ml-28 "
                        >
                          {isNew(product)}
                        </Text>
                        <VStack
                          flexDir={{ base: "column", md: "column-reverse" }}
                        >
                          <Text
                            fontSize={{ base: "28px", "2xl": "48px" }}
                            maxWidth={{base:"206px","2xl":"360px"}}
                            style={{
                              fontFamily: "Manrope",
                              fontWeight: "medium",
                              textTransform: "uppercase",
                            }}
                            noOfLines={3}
                            className=" text-center  tracking-wide lg:text-[32px] lg:w-[14rem]  lg:-ml-6
                            xl:text-[32px] xl:h-[8rem] xl:w-54   xl2:w-96  lg:text-start  xl2:text-[40px]  xl2:mt-2  "
                          >
                            {product.name}
                          </Text>
                        </VStack>
                      </VStack>
                    </Center>
                  </Box>
                  <Center>
                    <Box
                    
                     maxWidth={{"2xl":"550px"}}
                      mt="2"
                      fontWeight="semibold"
                      as="h4"
                      noOfLines={8}
                      className="w-[22rem] text-center  md:items-center md:relative  md:h-[280px] md:w-[26rem] lg:w-[20rem] lg:text-[14px] lg:h-[210px] lg:text-start lg:ml-28 xl2:-left-[5rem]  xl2:w-[360px] 2xl:h-[270px] 2xl:left-2 "
                    >
                      {product.description}
                    </Box>
                  </Center>
                </Box>
              </Stack>
              <Box>
                <Link to={`/product/${product.name}`}>
                  <Button
                    className="text-white bg-orange py-2 px-4 mt-4 md:relative md:-top-20 lg:-ml-6  xl:-top-20 xl2:-ml-32  xl2:top-3"
                    onClick={() =>
                      handleButtonClick(product.slug, product.name)
                    }
                  >
                    See Product
                  </Button>
                </Link>
              </Box>
            </Center>
          </Box>
          // </Link>
        ))}
      </Box>
    </>
  );
};

export default ProductCard;
