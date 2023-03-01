import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Context/UseContext';

const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p className='py-12 text-center'>
            <progress className="progress w-96"></progress>
        </p> 
    }
    if(user){
         return children
    }
    <Navigate to='/login' state={{from : location}} replace></Navigate>
   
};

export default PrivetRout;