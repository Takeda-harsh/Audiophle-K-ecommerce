/* eslint-disable no-unused-vars */
import React from 'react';
import CartSummaryItem from '../components/CartSummaryItem';

import { useSelector } from 'react-redux';


const CartSummary = () => {
  const {
    cartItems,
    totalPrice, 
    shipping,
    vat,
    grandTotal,
    toggleCheckoutModal,
  } =useSelector ;

  const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number / 100);
  };

  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-4 shadow-md">
      <h6 className="text-xl font-medium border-b pb-2">Summary</h6>
      <ul className="flex flex-col gap-4">
        {/* Render CartSummaryItem components here */}
        {cartItems.map((cartItem) => (
          <CartSummaryItem key={cartItem.id} {...cartItem} />
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-sm">
          Total: <span className="font-bold">{formatPrice(totalPrice)}</span>
        </p>
        <p className="text-gray-500 text-sm">
          Shipping: <span className="font-bold">{formatPrice(shipping)}</span>
        </p>
        <p className="text-gray-500 text-sm">
          VAT (included): <span className="font-bold">{formatPrice(vat)}</span>
        </p>
        <p className="text-gray-500 text-sm">
          Grand Total: <span className="font-bold text-primary-500">{formatPrice(grandTotal)}</span>
        </p>
      </div>
      <button
        type="submit"
        className="btn-1 bg-primary-500 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick={toggleCheckoutModal}
      >
        Continue & Pay
      </button>
    </div>
  );
};

export default CartSummary;
