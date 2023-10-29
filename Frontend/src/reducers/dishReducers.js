// const initialState = {
//   dishes: [],
//   error: null,
//   loading: false,
// };

// export const getAllDishesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GET_DISHES_REQUEST':
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case 'GET_DISHES_SUCCESS':
//       return {
//         ...state,
//         dishes: action.payload,
//         loading: false,
//       };
//     case 'GET_DISHES_FAILED':
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
