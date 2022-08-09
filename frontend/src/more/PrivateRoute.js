import React from 'react';
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
function PrivateRoute({ path, component, exact }) {
    const {userInfo} = useSelector(state => state.userReducer)

    if(!userInfo){
        return <Redirect to="/account" />;
    }else{
        return <Route path={path} component={component} exact={exact} />;
    }
   
      
}

export default PrivateRoute