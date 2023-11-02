export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PLACE_ORDER_REQUEST':
        return {
          loading: true,
        };
      case 'PLACE_ORDER_SUCCESS':
        return {
          loading: false,
          success: true,
          user: action.payload, // Store the user data
        };
      case 'PLACE_ORDER_FAILED':
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };