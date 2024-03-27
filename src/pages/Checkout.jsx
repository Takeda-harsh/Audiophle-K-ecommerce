/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Flex,
  Grid,
  Center,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
  Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GoBackBtn from "../components/GoBackBtn";
import SummaryCart from "../components/SummaryCart";


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "", 
    eMoneyPin: ""     
  });
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const cartItems = useSelector((state) => state.carts.cartItems);
  const [selectedItem] = useState(cartItems[0]); 

  const handleInputChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleContinueAndPay = () => {
    setIsModalOpen(true); 
    };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  
   const formattedTotalPrice = totalPrice.toLocaleString();

  const shipping =parseInt(50)
  const vat =parseInt(13.99)
  const formattedVat=vat.toLocaleString();
  const grandTotal=totalPrice+shipping+vat

  const getUniqueProducts = (cartItems) => {
    const uniqueProducts = [];
    const productIds = new Set();
  
    cartItems.forEach((item) => {
      if (!productIds.has(item.id)) {
        productIds.add(item.id);
        uniqueProducts.push(item);
      }
    });
  
    return uniqueProducts;


  };



  const handlePaymentMethodChange = (value) => {
    setFormData({ ...formData, paymentMethod: value });
  };

  

  return (
    <Box mb={48} className="m-10 lg:m-40">
      <Box className="mb-4">
        <GoBackBtn />
      </Box>
      <Box className="lg:m-20">
        <Box className="uppercase font-bold text-xl mb-10">Checkout</Box>
        <Box >
          <Text className="uppercase font-bold text-orange text-xs mb-2 text-[13px] my-10 lg:text-lg">
            Billing Address
          </Text>
          <Grid   templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={2}>
             <FormControl mb={2}>
            <FormLabel htmlFor="name" fontSize="sm" fontWeight="bold">
              Name
            </FormLabel>
            <Input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="md:w-[20rem]"
            />
          </FormControl>

          <FormControl mb={2}>
            <FormLabel htmlFor="email" fontSize="sm" fontWeight="bold">
              Email Address
            </FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              pattern="[a-zA-Z0-9._%\+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={2}>
            <FormLabel htmlFor="phoneNumber" fontSize="sm" fontWeight="bold">
              Phone Number
            </FormLabel>
            <Input
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </FormControl></Grid>
          

          <Box>
            <Text className="uppercase font-bold text-orange text-[13px] my-10 lg:text-lg">
              Shipping Info
            </Text>
            <FormControl mb={2}>
              <FormLabel htmlFor="address" fontSize="sm" fontWeight="bold">
                Your Address
              </FormLabel>
              <Input
                name="address"
                type="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </FormControl>
            <Grid   templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={2}>
                       <FormControl mb={2}>
  <FormLabel htmlFor="zipCode" fontSize="sm" fontWeight="bold">
    Zip Code
  </FormLabel>
  <Input
    name="zipCode"
    type="text"
    id="zipCode" 
    value={formData.zipCode}
    onChange={handleInputChange}
  />
</FormControl>

            <FormControl mb={2}>
              <FormLabel htmlFor="city" fontSize="sm" fontWeight="bold">
                City
              </FormLabel>
              <Input
                name="city"
                type="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel htmlFor="country" fontSize="sm" fontWeight="bold">
                Country
              </FormLabel>
              <Input
                name="country"
                type="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </FormControl>
            </Grid>
   
          </Box>

          <Box>
         
            <Box>
            <Text className="uppercase font-bold text-orange text-[13px] my-10 lg:text-lg">
              Payment details
            </Text>
            <Grid  templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "1fr 2fr" }}
            gap={2}
            >
            <FormControl as="fieldset" mb={2}>
              <FormLabel
                as="legend"
                className="font-bold"
              >
                Payment method
              </FormLabel>
              
             <Box className="md:relative md:left-[20rem]">
             <RadioGroup
                name="paymentMethod"
                defaultValue="e-money"
                value={formData.paymentMethod}
                // onChange={(value) =>
                //   setFormData({ ...formData, paymentMethod: value })
                // }
                onChange={handlePaymentMethodChange}
              >
                <Stack spacing="24px">
                  <Box className="border-2 border-orange py-4 px-2 w-[20rem] rounded-lg ">  
                  <Radio value="e-money" id="e-money" 
                   >
                   <FormLabel htmlFor="e-money" >e-money</FormLabel>
                  </Radio>
                  </Box>
                  <Box className="border-2 border-orange py-4 px-2 w-[20rem] rounded-lg">  
                  <Radio value="cash" id="cash">
                  <FormLabel htmlFor="cash" >Cash on delivery</FormLabel>
                  </Radio>
                  </Box>
                </Stack>
              </RadioGroup>
             </Box>
            
              </FormControl>
              </Grid>
              </Box>
            
              </Box>
              
             
              
             
             
            
            
                     {/* Additional inputs for e-money payment */}
                     {(formData.paymentMethod === "e-money" || formData.paymentMethod === "cash") && (
            <Box className="md: flex md:gap-4 md:-mt-32" >
               {formData.paymentMethod === "e-money" && (
                <>
              <FormControl mb={2} >
                <FormLabel htmlFor="eMoneyNumber" fontSize="sm" fontWeight="bold">
                  e-Money Number
                </FormLabel>
                <Input
                  name="eMoneyNumber"
                  type="text"
                  id="eMoneyNumber"
                  value={formData.eMoneyNumber}
                  onChange={handleInputChange}
               

                />
              </FormControl>
              <FormControl mb={2}>
                <FormLabel htmlFor="eMoneyPin" fontSize="sm" fontWeight="bold">
                  e-Money Pin
                </FormLabel>
                <Input
                  name="eMoneyPin"
                  type="password"
                  id="eMoneyPin"
                  value={formData.eMoneyPin}
                  onChange={handleInputChange}
                />
              </FormControl>
              </>
          )}
              {/* Additional message for cash on delivery */}
              {formData.paymentMethod === "cash" && (
                <>
                <Flex flexDirection={{base:"column", md:"row"}}>
                <img src="/resources/assets/checkout/icon-cash-on-delivery.svg" alt=""  className="w-12 ml-[10rem] m-2 md:m-0" />
            <Text className="w-full  ml-0 md:ml-10">
           The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
            </Text>
                </Flex>
               
            </>
         
          )}
        
            </Box>
                     )}
          
      
            
        
      
     
      <Box>
        <Box className="mt-12">
          <Text as="b" className="uppercase text-[18px]">summary</Text>
          
            {cartItems?.length > 0 && (
              <>
                {cartItems.map((item, id) => (
                  <SummaryCart key={id} product={item} quantity={item.quantity} />
                ))}
              
              </>
            )}
          
        </Box>
        <Stack flexDir="row" justifyContent="space-between">
        <Text className="ml-4 uppercase text-slate-400">Total</Text>
        <Text as="b" className="mr-6">
          ${formattedTotalPrice}{" "}
        </Text>
      </Stack>
      <Stack flexDir="row" justifyContent="space-between">
        <Text className="ml-4 uppercase text-slate-400">Shipping</Text>
        <Text as="b" className="mr-6">
          ${shipping}{" "}
        </Text>
      </Stack>
      <Stack flexDir="row" justifyContent="space-between">
        <Text className="ml-4 uppercase text-slate-400">Vat(included)</Text>
        <Text as="b" className="mr-6">
          ${formattedVat}{" "}
        </Text>
      </Stack>
      <Stack flexDir="row" justifyContent="space-between">
        <Text className="ml-4 uppercase text-slate-400"> Grand Total</Text>
        <Text as="b" className="mr-6">
        ${grandTotal.toLocaleString()}{" "}
        </Text>
      </Stack>

        
        <Center  className="w- ring-2 ring-slate-300 py-2 bg-orange text-white uppercase  tracking-wider" onClick={handleContinueAndPay}>
                Continue & pay
                </Center>
        
        
              
      </Box>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent maxH="700px" maxW={{base:"90%",lg:"50%"}}>
          <ModalHeader>
          <Image src='/resources/assets/checkout/icon-order-confirmation.svg' alt='payment success icon' />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Text fontWeight="bold" className="uppercase text-[24px] "> Thank You for your order</Text>

            <Text fontWeight="bold" mb={8} className="text-[15px] leading-4 tracking-wider ">
             Your will receive an email confirmation shortly.
            </Text>
            <Box className="md:flex md:bg-lightgray md:h-32 ">
            <SummaryCart product={selectedItem} quantity={selectedItem?.quantity}  className=""/>
            {/* You can customize the message further here */}
            <Divider w="15rem" paddingInline='10' marginLeft={10} className=" md:absolute md:top-[18rem] md:left-10 md:text-black"/>
            <Center>
            {getUniqueProducts(cartItems).length > 1 && (
        <Text  mb={4} className="text-slate-400 text-[12px] md:absolute md:top-[18rem] md:left-32 ">and {cartItems.length} other item(s)</Text>
      )}
            </Center>
        
            <Stack flexDir="column" justifyContent="space-evenly "   className="bg-black h-32  mt-10 md:absolute md:top-[9rem] md:left-[24rem]  md:w-72 lg:w-32 lg:left-[22.5rem] xl:w-64 xl2:left-[24rem] xl2:w-[19.5rem]">
        <Text className="ml-4 uppercase text-slate-400 text-[15px] text-slate-400 "> Grand Total</Text>
        <Text as="b" className="mr-6 text-white text-[18px] ml-4">
        ${grandTotal.toLocaleString()}{" "}
        </Text>
      </Stack>
            </Box>
           

          </ModalBody>
          <ModalFooter>
            <Box className="w-96 lg:w-[120rem]">
            <Link to="/"> <Center  className=" ring-2 ring-slate-300 py-2 bg-orange text-white uppercase  tracking-wider" >
                Back to home
                </Center>
                </Link>
            </Box>
           
        
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </Box>
    </Box>
  );
};

export default Checkout;