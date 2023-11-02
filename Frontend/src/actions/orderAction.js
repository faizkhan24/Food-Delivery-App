import axios from "axios";

export const placeOrder = (token, calculateSubtotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' });
    const currentUser = getState().loginUserReducer.currentUser;
    console.log('current User',currentUser)
    const cartState = getState().cart;
    console.log('cart state',cartState)
  
    try {
      const response = await axios.post('/api/orders/placeorder', {
        token,
        calculateSubtotal,
        currentUser,
        cartState,
      });
      console.log(response)
      dispatch({ type: 'PLACE_ORDER_SUCCESS' });
      console.log(response);
    } catch (error) {
      dispatch({ type: 'PLACE_ORDER_FAILED', payload: error.message }); // Pass error message as payload
      console.error('Axios Error:', error);
    }
  };
  