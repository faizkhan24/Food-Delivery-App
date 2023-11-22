// Checkout.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions';
const Checkout = ({ calculateSubtotal }) => {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log('Token:', token);
    const subtotal = calculateSubtotal();
    console.log('Subtotal:', subtotal);
    const amount = subtotal * 100;
    console.log('Amount:', amount);

    dispatch(placeOrder(token, subtotal)); // Pass the subtotal as the amount
  }

  // ...rest of the code



  // Calculate the amount using the calculateSubtotal function
  const amount = calculateSubtotal();

  return (
    <div>
      <StripeCheckout amount={amount} shippingAddress token={tokenHandler} currency="INR" stripeKey={'pk_test_51O7KJeSIFQNRHGYfjvzwMiR5KEK0YAf6tbF5K5QjERfcDLYE2RxGDTxCwPQ375HLIiWHYuMZydZEZxkFmzLOYq4N00YxwP303r'}>
        <button className="paynow-btn">Pay now</button>
      </StripeCheckout>
    </div>
  );
}; 


export default Checkout;
