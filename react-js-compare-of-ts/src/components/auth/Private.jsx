import React from "react";
import Login from "./Login";

const Private = ({isLoggedIn, component: Component}) => {
  if(isLoggedIn){
    return <Component name='Manoj'/>
  }else{
    return <Login/>
  }
};

export default Private;
