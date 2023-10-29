import axios from "axios";


// Assuming you want to pass the 'user' object as an argument
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "https://food-delivery-app-lyart.vercel.app/api/users/register",
      user
    );
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user }); // Pass user data in payload
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "https://food-delivery-app-lyart.vercel.app/api/users/login",
      user
    );
    console.log("login response", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data }); // Store relevant data
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error }); // Store the error message
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
