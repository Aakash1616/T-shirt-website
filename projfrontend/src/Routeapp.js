import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './auth/helper/PrivateRoutes'
import Home from "./core/Home" 
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import UserDashboard from './user/UserDashboard'

const Routeapp = () => {
    return (
        <Router>
        <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/signup" element={<Signup/>} />
        <Route exact path = "/signin" element={<Signin/>} />
        <Route exact path='/user/dashboard' element= {<PrivateRoutes>{UserDashboard}</PrivateRoutes>}/>
        </Routes> 
        </Router>
    );
}

export default Routeapp; 