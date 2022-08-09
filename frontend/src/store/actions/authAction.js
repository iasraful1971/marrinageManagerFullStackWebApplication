import axios from "axios";


// Handle register
export const user_register = (data) => async (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });


  try {
    const response = await axios.post(
      "http://localhost:8080/rest-api/register",
      data,
     
    );
    console.log( response.data)
    localStorage.setItem("auth_token", response.data.token);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: {
        error: "Maybe your email is duplicate. Try agin",
      },
    });
  }
};




// Handle login
export const user_login= (data) => async (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });


  try {
    const response = await axios.post(
      "http://localhost:8080/rest-api/login",
      data,
     
    );
    localStorage.setItem("auth_token", response.data.token);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data});
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: {
        error: "Maybe your email or password  Not Match with old record. Try agin",
      },
    });
  }
};