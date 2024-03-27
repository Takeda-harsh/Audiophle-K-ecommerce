/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'



const Layout = ({children,data,handleTabChange ,cartItems}) => {
 
   // Define the category tab data
   const categoryTab = [
    { title: "Home", path: "/" },
    { title: "Headphones", path: "/headphones" },
    { title: "Speakers", path: "/speakers" },
    { title: "Earphones", path: "/earphones" },
  ];
  return (
    <div>
        <NavBar  categoryTab={categoryTab} data={data}    cartItems={cartItems} />
        <main>{children}</main>
        <div className='lg:relative lg:top-[4rem]'>
        <Footer handleTabChange={handleTabChange} data={data}  />
        </div>
        
        </div>
  )
}

export default Layout