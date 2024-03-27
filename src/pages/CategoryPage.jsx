/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import ProductCard from "../components/ProductCard";
import { Box, Text, Center} from "@chakra-ui/react";
import BestGear from "../components/BestGear";

const CategoryPage = ({ data, handleButtonClick }) => {
  const { categoryName } = useParams();

  // Filter products based on the category name
  const categoryProducts = data.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
    
      <Box className="bg-navbgColor text-white uppercase h-[8rem]  2xl:h-64 flex justify-center items-center md:relative md:-top-2">
     
        <Center>
          <Text as="h1" fontSize="4xl">{categoryName}</Text>
        </Center>
      </Box>
      <Box className=" ">
      <hr   className=" relative -top-[8rem] z-20 w-full md:w-[44rem] md:left-[2rem] md:-top-[9rem] lg:w-[55rem] lg:left-[5rem]  xl:left-[12.5rem]  xl2:w-[62rem] xl2:left-[14.5rem] 2xl:w-[110rem] 2xl:-top-[16rem] 2xl:left-[25rem]"/>
      </Box>

      <Box>
        <ProductCard
        data={data}
          handleButtonClick={handleButtonClick}
          categoryProducts={categoryProducts}
        />
      </Box>
      <Box className=" md:mb-20 md:-ml-4 lg:h-80  xl2:mt-16 2xl:mb-96">
        <Products  data={data} />
      </Box>
      <Box className="lg:-mt-10 lg:relative lg:-left-5 lg:mb-96">
        <BestGear />
      </Box>
    </>
  );
};

export default CategoryPage;
