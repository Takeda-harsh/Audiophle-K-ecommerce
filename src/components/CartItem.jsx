/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React,{useState} from "react";
import { useDispatch} from "react-redux";
import { Box,Flex,Text,Stack,VStack } from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
import { RxMinus } from "react-icons/rx";
import {  addToCart,reduceCart} from "../slices/CartSlices"



const CartItem = ({ product}) => {
  // console.log("Quantity prop:", quantity);
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const dispatch = useDispatch();


  
  // const cartItems = useSelector((state) => state?.carts.cartItems);


 
  const handleDecrease = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
      // dispatch(decreaseCart(product.id));
      const payload = { item: product, quantity: 1 };
      dispatch(reduceCart(payload));
    }
  };
  
  const handleIncrease = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
    const payload = { item: product, quantity: 1 };
    dispatch(addToCart(payload));
  };
  
  
  //  const cartCount = useSelector((state) => state.carts?.count ?? 0);


  return (
    <>
           <Stack  flexDir="row" key={product.id} className="w-[80%] mb-6 ">
      <img src={product?.image?.mobile} alt={product.name}  className="h-20 w-20"/>
      <Stack flexDir="row" className="">
        <VStack> 
          <Text as="b" className="w-32">{product.name}</Text>
        <Text className="text-slate-400 -ml-12 ">${product.price.toLocaleString()}</Text> 
        </VStack>
        
        <Flex justify="center" alignItems="center">
                <Box className="flex shadow-md px-2 py-4  bg-gray -mt-12 h-6 w-20 ml-10 bg-lightgray">
               
                    <RxMinus onClick={handleDecrease}  className="w-32 flex self-center"/>
                  
                  <Text
                    marginInline={2}
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "uppercase",
                    }}
                  >
                    <span className="flex self-center -mt-3 w-[10px]">{itemQuantity}</span>
                  </Text>
                 
                    <GrFormAdd onClick={handleIncrease} className="w-32 flex self-center"/>
                 
                </Box>
                <Box>

                </Box>
                </Flex>
       
        
      </Stack>
   
    </Stack>
     
   
    </>
  );
};

export default CartItem;

