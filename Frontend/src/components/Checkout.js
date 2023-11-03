import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const Checkout = () => {
  return (
    <div>
      <StripeCheckout>
      <button className="paynow-btn">Pay now</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
