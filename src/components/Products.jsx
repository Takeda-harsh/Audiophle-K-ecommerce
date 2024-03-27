/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const categoriesData = [
    { id: 1, src: "/resources/assets/shared/desktop/image-category-thumbnail-headphones.png" },
    { id: 2, src: "/resources/assets/shared/desktop/image-category-thumbnail-speakers.png" },
    { id: 3, src: "/resources/assets/shared/desktop/image-category-thumbnail-earphones.png" },
  ];

  const uniqueCategories = new Set(data?.map((product) => product.category));
  
  

  return (
    <>
      <div
        className="mt-20 grid grid-cols-1 w-screen px-8 py-0 min-h-screen gap-2 md:w-[50rem] md:grid-cols-3 md:min-h-[14rem] md:relative  md:-left-[5.3rem]  lg:py-0 lg:w-[60rem] xl:w-[65rem] xl:left-[2.3rem] xl2:w-[68rem] xl2:left-20 2xl:-left-20 2xl:w-[120rem] 2xl:top-10"
      >
        
        {[...uniqueCategories].map((category, index) => {
          const categoryData = categoriesData?.find((item) => item.id === index + 1); 

          return (
            <div key={index} className=" relative grid grid-columns-1 content-between justify-normal text-center  md:mt-2  md:ml-6 lg:mb-[12rem] lg:w-full 2xl:relative 2xl:left-64">
              <div className="md:w-96lg:w-80 xl:w-96 last:mb-32">
                <img
                  src={categoryData?.src}
                  alt="category image"
                  className="relative top-10 z-50 gap-0 h-[180px] w-full object-contain md:left-[5rem] md:h-[100px] md:top-2 lg:h-[120px] lg:left-[7rem] lg:top-10 xl:h-[150px] xl:left-[4rem] xl:top-6 xl2:left-[4rem] xl2:h-[180px] 2xl:h-[390px] 2xl:left-[16rem] 2xl:top-1"
                />

                
                <div className="rounded-md  absolute uppercase top-[6rem] z-40 bg-lightgray h-48  shadow-xl w-full md:h-[150px] md:w-[98%] md:top-[3rem] md:left-[5rem] text-center lg:h-[170px]  lg:top-[5rem] lg:left-[6.5rem]
                 xl:top-[5rem] xl:w-[98%] xl:h-[180px] xl2:h-[220px] 2xl:h-[380px] 2xl:left-[10rem] 2xl:top-[9rem]">
                  <div className="mt-24 md:mt-20 lg:mt-20 xl:mt-28 xl2:mt-28 2xl:mt-56">
                  <Link to={`/category/${category}`}>
                    <p className="font-bold text-xl md:text-xs 2xl:text-2xl mb-4 tracking-[1.07px]">
                      {category}
                    </p>
                    </Link>
                    <Link to={`/category/${category}`}>
                      <small className="w-[58px] text-gray flex text-sm 2xl:text-xl m-auto items-center md:text-xs tracking-[1px]">
                        shop{" "}
                        <span className="text-center text-orange ml-2 flex top-[12rem]">
                          <FaGreaterThan size={10} />
                        </span>
                      </small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;


