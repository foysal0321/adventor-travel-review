import React, { createContext, useEffect, useState,  } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile} from 'firebase/auth'
import app from '../../firebase/FirebaseConfig';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

const UseContext = ({children}) => {

    const [user,setuser] = useState()
    const [loading,setloading] = useState(true)

    //create user
    const createUser =(email,pass)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    //login user
    const loginUser =(email,pass)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    //google signIn
    const signGoogle =()=>{
        setloading(true)
        return signInWithPopup(auth, googleAuth)
    }
    //logout user
    const logoutUser =()=>{
        setloading(true)
        return signOut(auth)
    }

    //current User
    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
            setloading(false)
        })
        return () => unscribe()
    },[])

    //update user
    const updateUser=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const info={
        user,setuser,createUser,loginUser,signGoogle, updateUser,logoutUser,
        loading
    }
    return (
        <div>          
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;