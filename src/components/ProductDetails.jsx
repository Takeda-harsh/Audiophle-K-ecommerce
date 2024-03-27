/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Center,
  Stack,
  Text,
  Flex,
  Image,
  Link,
  Grid,
} from "@chakra-ui/react";
import Button from "./Button";
import { GrFormAdd } from "react-icons/gr";
import { RxMinus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCart,
  decreaseCart,
  addToCart,
  resetCartCount,
} from "../slices/CartSlices";
import Products from "./Products";
import BestGear from "./BestGear";
import GoBackBtn from "./GoBackBtn";

const ProductDetailsPage = ({ product, handleButtonClick }) => {
  const [selected, setSelected] = useState(null);
  const { productName, slug, name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.carts?.count ?? 0);

  useEffect(() => {
    // Reset count when component unmounts
    return () => {
      dispatch(resetCartCount());
    };
  }, [dispatch]);

  // Fetch selected product based on slug when component mounts
  useEffect(() => {
    const selectedProduct = productName
      ? product?.find((p) => p.name === productName)
      : product?.find((p) => p.slug === slug);
    setSelected(selectedProduct);
    // console.log(`selected in details `, selectedProduct);
  }, [product, productName, slug]);

  // Check if the selected product exists
  if (!selected) {
    return <div>Product not found.</div>;
  }

  // Destructure product properties
  const {
    others,
    gallery,
    description,
    price,

    categoryImage,
    features,
    includes,
  } = selected;

  const isNew = (selected) => {
    if (selected.new === true) {
      return "New Product";
    } else {
      return "";
    }
  };

  // Destructure gallery images
  const { first, second, third } = gallery || [];

  const handleDecrease = () => {
    dispatch(decreaseCart());
  };
  const handleIncrease = () => {
    dispatch(increaseCart());
    // dispatch(addToCart(selected));
  };

  const handleAddtoCart = () => {
    if (selected) {
      const quantity = cartCount;
      dispatch(addToCart({ item: selected, quantity, image: selected.image }));
    }
  };



  return (
    <>
      <Box className="m-2 max-w-full  lg:w-96  ">
        <Button className="capitalize p-2 shadow-sm">
          <GoBackBtn />
        </Button>

        <Box
          mt={20}
          mb={{base:"20",lg:"0"}}
          className="px-3 ml-4   relative  lg:grid lg:grid-cols-2 lg:h-[26rem] xl2:h-[588px] w-[92%]  lg:w-[65%] lg:-ml-20 xl:w-[80%] xl:h-[32rem] xl2:w-[70%] xl:ml-16 "
        >
          <Box className="md:w-full lg:w-[900px] xl:w-[800px] ">
            {/* Image Section */}
            <Stack flexDir={{ base: "column", md: "row" }}>
              <Center>
                <Image
                  srcSet={`
    ${categoryImage.mobile} 480w,
    ${categoryImage.tablet} 800w,
    ${categoryImage.desktop} 1200w
  `}
                  sizes="(max-width: 480px) 480px,
         (max-width: 800px) 800px
         1200px"
                  src={categoryImage.desktop}
                  alt={name}
                  className="h-[20rem] w-full object-cover bg-gray md:h-[15rem]  lg:order-2 order-1 lg:w-[700px] md:h-[25rem]  lg:relative lg:left-32  xl2:h-[35rem] xl2:w-[27rem] "
                />
              </Center>

              {/* Text Section */}
              <Box flex={{ base: "0"}} mr={{ base: "0", lg: "1" }} className="lg:relative lg:left-32 xl2:left-[20rem]">
                <Center>
                  <Box flexDir={{ base: "column"}}>
                    <Stack flexDir={{ base: "column"}}>
                      <Box className="md:ml-16 text-start ">
                        <Box mb="1rem">
                          <Text
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "14px",
                              fontWeight: "regular",
                              textTransform: "uppercase",
                            }}
                            className="text-orange tracking-widest lg:relative lg:w-[20rem] " 
                          >
                            {isNew(selected)}
                          </Text>
                        </Box>
                        <Box mb="1rem">
                          <Text
                            as="b"
                            style={{
                             
                              fontFamily: "Manrope",
                              fontSize: "28px",
                              textTransform: "uppercase",
                            }}
                            className="md:w-20"
                          >
                            {selected.name}
                          </Text>
                        </Box>
                        <Box mb="1rem">
                          {" "}
                          <Text
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "15px",
                              fontWeight: "medium",
                            
                            }}
                            className="md:w-[20rem] "
                          >
                            {description}
                          </Text>
                        </Box>
                        <Box mb="1rem">
                          {" "}
                          <Text
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "18px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                            }}
                          >
                            ${price.toLocaleString()}
                          </Text>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </Center>
              </Box>
            </Stack>
          </Box>

          <Center>
            <Box flexDir={{ base: "column" }} className="lg:relative lg:left-[36rem] lg:top-[20rem] xl:left-[27rem] xl2:left-[40rem]" >
              <Flex justify="center" alignItems="center">
                <Box
                  mr="1rem"
                  mb="1rem"
                  className="flex border py-2 px-6 md:ml-48 bg-lightgray"
                >
                  <Button>
                    <RxMinus onClick={handleDecrease} />
                  </Button>
                  <Text
                    marginInline={2}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{cartCount}</span>
                  </Text>
                  <Button>
                    <GrFormAdd onClick={handleIncrease} />
                  </Button>
                </Box>
                <Box>
                  <Button
                    className="bg-orange py-2 px-4 text-white mb-[1rem]"
                    onClick={handleAddtoCart}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Flex>

              <Box className=" md:w-[680px]  md:mb-8 md:-ml-2 lg:w-[900px]  lg:mb-12 lg:-ml-72 lg:mt-20 xl:-ml-40 xl:mt-20 xl:w-[850px] xl2:-ml-[20rem] xl:w-[1050px] xl2:mt-64" >
                <Text
                  as="b"
                 
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "24px",
                   
                    textTransform: "uppercase",
                  }}
                
                >
                  Features
                </Text>
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "15px",
                    fontWeight: "medium",
                  }}
                  className="md:px-16 md:-ml-16 w-full whitespace-pre-line"
                >
                  {features}
                </Text>
              </Box>
              <Box marginTop={4} className="md:grid md:grid-cols-2  md:-ml-1 md:mb-12 lg:w-[900px]  lg:mb-20 lg:-ml-72 lg:mt-16 xl:-ml-40 xl:w-[850px] xl2:-ml-[320px]">
                <Text
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  In the box
                </Text>
                <ul>
                  {Array.isArray(includes) ? (
                    includes.map((item, id) => (
                      <li key={id} className="md:ml-28  lg:ml-56  xl:ml-32">
                        <p>
                          <span className="text-orange">{item.quantity}</span>
                          <span className="text-orange">x </span>
                          {item.item}
                        </p>
                      </li>
                    ))
                  ) : (
                    <li>No information available.</li>
                  )}
                </ul>
              </Box>
            </Box>
          </Center>
          <Grid
            templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={4}
            className="md:w-[740px] md:-ml-2 lg:w-[900px]  lg:mb-12 lg:ml-[8.5rem] lg:mt-72   xl:w-[900px] xl:ml-32 "
           
          >
            <Stack >
              {/* Gallery images */}
              {[first, second].map((gallery, index) => (
                <Image
                  key={index}
                  srcSet={`
          ${gallery?.mobile} 480w,
          ${gallery?.tablet} 800w,
          ${gallery?.desktop} 1200w
        `}
                  sizes="(max-width: 480px) 480px,
               (max-width: 800px) 800px
               1200px"
                  src={gallery?.desktop || categoryImage.desktop}
                  alt={`Gallery Image ${index + 1}`}
                  className="mt-4 md:px-6 md:-ml-6 lg:w-[460px] lg:h-[16.2rem]  xl2:px-0 xl2:ml-2"
                />
              ))}
            </Stack>
            <Stack>
              {/* Gallery images */}
              {[third].map((gallery, index) => (
                <Image
                  key={index}
                  srcSet={`
          ${gallery?.mobile} 480w,
          ${gallery?.tablet} 800w,
          ${gallery?.desktop} 1200w
        `}
                  sizes="(max-width: 480px) 480px,
               (max-width: 800px) 800px
               1200px"
                  src={gallery?.desktop || categoryImage.desktop} // Use desktop image by default
                  alt={`Gallery Image ${index + 3}`}
                  className="mt-4  md:-ml-12  md:min-h-[26.5rem]  md:min-w-[15.5rem] lg:min-h-[34rem] lg:w-[30rem]  xl2:ml-8"
                />
              ))}
            </Stack>
          </Grid>

          <Box  className="md:-mt-36  lg:mt-[66rem]">
            <Center>
              <Box className="w-full lg:w-[900px] lg:ml-[650px]  xl2:ml-[950px]" >
                <Text className="uppercase font-bold w-full  mt-32 mb-4  md:-mt-96 md:w-[450px] md:ml-[180px] text-[28px] tracking-[0.8px] lg:-mt-32  lg:w-[23rem] xl:w-[26rem]  ">
                You may also like
              </Text></Box>
              
            </Center>

            <Box >
              <Stack flexDir={{ base: "column", md: "row" }}  className="md:w-[710px] lg:w-[850px] lg:relative lg:left-10  xl:-ml-12 xl2:-ml-2 xl:w-[860px] xl2:w-[920px] ">
                {others.map((item, index) => {
                  const { image, name ,slug} = item;
                  const { mobile, tablet, desktop } = image;
                  return (
                    <Stack key={index}>
                      <Image
                        key={index}
                        srcSet={`
          ${mobile} 480w,
          ${tablet} 800w,
          ${desktop} 1200w
        `}
                        sizes="(max-width: 480px) 480px,
          (max-width: 800px) 800px
          1200px"
                        src={desktop || categoryImage.desktop}
                        alt={`others Image ${index + 1}`}
                        className="mt-4 h-[180px] w-full object-contain bg-lightgray md:h-[250px] md:-mt-16 md:-ml-2 md:object-cover md:w-[300px] lg:w-[473px]   "
                      />
                      <Text
                        as="b"
                        noOfLines={2}
                        textTransform="uppercase"
                        fontSize="24px"
                        margin="auto"
                       className="md:relative md:-left-6 lg:-left-[.5rem]">
                        {name}
                      </Text>
                      <Box marginLeft={32}>
                        <Link
                          to={`/product/${slug}`}
                          onClick={() =>
                            handleButtonClick(name, slug)
                          }
                        >
                          <Button className="bg-orange py-2 px-2 text-white mb-[1rem] -ml-8   md:h-[3rem] md:-ml-28 lg:-ml-[4rem]">
                            See Product
                          </Button>
                        </Link>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="md:-ml-6 lg:mt-[100rem]  lg:ml-5 xl:ml-0 ">
        <Products data={product} />
      </Box>
      <Box className="lg:-mt-32">
        <BestGear />
      </Box>
    </>
  );
};

export default ProductDetailsPage;
