import React from 'react'
import {Route, Navigate} from "react-router-dom"
//import {isAuthenticated} from "./index"
const isAuthenticated = true;
const PrivateRoutes = ({component : Component, ...rest}) => {
  return (
    <Route
        {...rest} 
        render={(props) => 
            isAuthenticated ? (
                <Component {...props} /> 
                ) : (
                    <Navigate
                    to = {
                        "/signin"
                      }
                        replace
                        state= {props.location} 
                    />
                )
            }
    />
  );
}

export default PrivateRoutes
