import jwt_decode from "jwt-decode";
const initState = {
    authenticate: false,
    userInfo: "",
    errorMessage: "",
    successMessage: "",
    loader: false,
   
  };

  const DToken = (token) => {
    const decodedToken  =  jwt_decode(token)
    const expiresTime  = new Date(decodedToken.exp * 1000)
    if(new Date() > expiresTime){
      localStorage.removeItem("auth_token")
      return null;
    }else{
      return decodedToken
    }
  }
  const getToken = localStorage.getItem("auth_token");
  if(getToken){
    const decodeToken = DToken(getToken)
    if(decodeToken){
      initState.userInfo = decodeToken
      initState.authenticate = true
    }
  }




  export const userReducer = (state = initState, action) => {
    const { payload, type } = action;
  
    if (type === "LOADER_RUN") {
      return {
        ...state,
        loader: true,
      }
    }
 
    if (type === "LOGIN_FAIL") {
        return {
          ...state,
          loader: false,
          errorMessage: payload.error,
          authenticate: false,
          userInfo: "",
          successMessage: "",
        };
      }
      if(type === "USER_REGISTER_SUCCESS" || type === "USER_LOGIN_SUCCESS"){
        
        return {
          ...state,
          loader: false,
          authenticate:true,
          errorMessage: "",
          userInfo: payload
         
         
        }
    }
      return state;

}