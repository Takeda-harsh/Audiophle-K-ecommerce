/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Flex, Text, Stack, VStack } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

const SummaryCart = ({ product }) => {
const [itemQuantity, setItemQuantity] = useState(product?.quantity);

  // Retrieve cart items from the Redux state
  // const cartItems = useSelector((state) => state.carts.cartItems);
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  // Format total price with commas
  // const formattedTotalPrice = totalPrice.toLocaleString();

  // const shipping = parseInt(50);
  // const vat = parseInt(1079);
//  const formattedVat = vat.toLocaleString();
  // const grandTotal = totalPrice + shipping + vat;

  return (
    <>
      <Stack
        flexDir="row"
        key={product?.id}
        className={`w-[80%] mb-6 `}
      >
        <img
          src={product?.image?.mobile}
          alt={product?.name}
          className="h-20 w-20"
        />
        <Stack flexDir="row" className="">
          <VStack>
            <Text as="b" className="w-32">
              {product?.name}
            </Text>
            <Text className="text-slate-400 -ml-12 ">
              ${product?.price.toLocaleString()}
            </Text>
          </VStack>

          <Flex justify="center" alignItems="center">
            <Box className="flex px-2 py-4 -mt-12 h-6 w-20 ml-10">
              <span className="-mt-[13px]">x</span>

              <Text
                marginInline={2}
                style={{
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "medium",
                  textTransform: "uppercase",
                }}
              >
                <span className="flex self-center -mt-3 w-[10px]">
                  {itemQuantity}
                </span>
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default SummaryCart;
