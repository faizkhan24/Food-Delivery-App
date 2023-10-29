// import axios from 'axios';

// export const getAllDishes = () => async (dispatch) => {
//     dispatch({ type: 'GET_DISHES_REQUEST' });

//     try {
//         const response = await axios.get('/api/dishes/getalldishes');
//         console.log('API Response',response.data);
//         dispatch({ type: 'GET_DISHES_SUCCESS', payload: response.data });
//         console.log('GET_DISHES_SUCCESS dispatched');
        
//     } catch (error) {
//         console.error("GET_DISHES_FAILED", error);
//         dispatch({ type: 'GET_DISHES_FAILED', payload: error.message || 'An error occurred' });
//     }
// };
