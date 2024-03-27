/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  
  Center,
  Flex,
  Text,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  DrawerCloseButton,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Stack,
  
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";
import Products from "./Products";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeAllItems } from "../slices/CartSlices";

const NavBar = ({ data }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const placement = useBreakpointValue({ base: "right", md: "top" });
  const location = useLocation();
  const dispatch=useDispatch();
  // const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  

  const cartCount = useSelector((state) =>
    state.carts.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  useEffect(() => {
    // Update displayed cart count when count changes
    setItemQuantity((prevQuantity) => prevQuantity + cartCount);
  }, [cartCount, setItemQuantity]);

  // Retrieve cart items from the Redux state
  const cartItems = useSelector((state) => state.carts.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Format total price with commas
  const formattedTotalPrice = totalPrice.toLocaleString();

  // Extract unique categories, including Home if not present
  const uniqueCategories = useMemo(() => {
    try {
      return ["Home", ...new Set(data?.map((item) => item.category))];
    } catch (error) {
      console.error("Error extracting unique categories:", error);
      return []; 
    }
  }, [data]);

  // Define initial state for activeTab, assuming 'Home' if no match
  const [activeTab, setActiveTab] = useState(() => {
    const currentTab = data?.find((tab) =>
      location.pathname.includes(tab.category.toLowerCase())
    );
    return currentTab ? currentTab.category : "Home";
  });

  const toggleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveAll = ()=> {
    dispatch(removeAllItems())

  }

  // Check if window width is greater than or equal to 1024px (example for desktop)
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <nav className="relative  z-10 flex bg-navbgColor py-8 px-2 text-white min-w-screen xl:place-content-between 2xl:py-12 2xl:px-6 ">
        <Flex className="md:mx-[1rem]  lg:mx-14  xl:mx-[12rem] 2xl:mx-[30rem]">
          <Box>
            {/* Mobile menu button*/}
            <IconButton
              onClick={toggleMenu}
              aria-label={isDrawerOpen ? "Close" : "Menu"}
              icon={isDrawerOpen ? <CgCloseO /> : <FaBars />}
              display={{ base: "flex", lg: "none" }}
              variant={isDrawerOpen ? "ghost" : "white"}
              style={{ width: "40px", height: "20px", color: "white" }}
            />
          </Box>

          {/* Logo */}
          <Box>
            <Link to="/">
              <img
                src="../../resources/assets/shared/desktop/logo.svg"
                alt="company logo"
              
                className=" mx-[5rem] md:mx-[2rem]  md:mr-[28rem] lg:ml-[1rem] lg:mt-4 lg:mx-[30rem]  xl:ml-2   xl2:mr-32 xl2:ml-8   2xl:w-96   2xl:-ml-24"
                
              />
            </Link>
          </Box>
          {/* Navigation Links */}
          {isDesktop && (
            <Box>
              <Box
                as="div"
                className={` lg:absolute  lg:left-[21rem] lg:mt-4  xl:left-[30rem] xl2:left-[35rem] xl2:text-[24px] 2xl:left-[64rem] `}
              >
                <Box
                  as="div"
                  className={` lg:flex lg:flex-row ${
                    isDrawerOpen ? "flex-row" : "flex-col "
                  } ${isDrawerOpen ? "sm:hidden lg:flex " : " hidden sm:flex"}`}
                >
                  {uniqueCategories.map((category) => (
                    <Box
                    fontSize={{base:"13px", "2xl":"28px"}}
                      key={category}
                      as="h2"
                      cursor="pointer"
                      className={`lg:px-4 leading-6 tracking-wider  2xl:mt-4 ${
                        activeTab === category ? "text-orange" : " text-white"
                      }`}
                      onClick={() => handleTabChange(category)}
                    >
                      {category === "Home" ? (
                        <Link to="/" className="text-md uppercase ">Home</Link>
                      ) : (
                        <Link to={`/category/${category.toLowerCase()}`} className="text-md uppercase">
                          {category}
                        </Link>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
          <Box >
            <RiShoppingCart2Line
           
              text="white"
              style={{ width: "40px", height: "20px" }}
              className="md:ml-2  lg:ml-64 lg:mt-5 xl:relative xl:left-0 xl:px-2 xl2:ml-[42rem]  2xl:left-[30rem] 2xl:mt-10"
              onClick={showModal}
            />

            <span className="relative -top-9 left-6 text-orange  lg:left-[17.5rem] lg:-top-10  xl2:left-[43rem]">
              {cartCount !== 0 ? cartCount : null}
            </span>
          </Box>
        </Flex>
      </nav>
     
      <Drawer
        placement={placement}
        onClose={() => setIsDrawerOpen(false)}
        isOpen={isDrawerOpen}
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Center><Products data={data} /></Center>
         
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box >
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          width="200px"
          padding={4}
          marginInline="0"
         
        >
          <ModalOverlay />
          <ModalContent  maxH="600px" maxW={{base:"90%",lg:"50%"}}>
            <ModalHeader>
              <Stack flexDir="row"className="flex
              justify-between">
                <Text className="uppercase">Cart({cartCount})</Text>
              <small className="text-slate-400 underline" onClick={handleRemoveAll}>Remove all</small>
              </Stack>
              
            </ModalHeader>
            <ModalBody padding={3} margin={0}>
              {console.log("Cart Items in navbar:", cartItems)}
              {/* Map over the cart items and render a CartItem for each item */}
              {cartItems?.map((item, id) => (
                <CartItem key={id} product={item} quantity={item.quantity} />
              ))}
               <Stack flexDir="row"  justifyContent="space-between">   
        <Text className="ml-4 uppercase text-slate-400">Total</Text> 
        <Text as="b" className="mr-6">${formattedTotalPrice} </Text>
        </Stack>
            </ModalBody>

            <ModalFooter padding={3} margin={0}>
           
       
          <Link to="/checkout" onClick={handleCloseModal}>
          <Center  className="w-80 mr-4 ring-2 ring-slate-300 py-2 bg-orange text-white uppercase  tracking-wider">
                Checkout
                </Center>
              </Link>
              
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default NavBar;
