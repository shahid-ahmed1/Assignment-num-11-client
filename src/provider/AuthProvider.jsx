
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword,signInWithPopup, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';
export const AuthContext= createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoaing] = useState(true);
    
    const creatNewUser=(email,password)=>{
        setLoaing(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const userLogin=(email,password)=>{
        setLoaing(true)
    return signInWithEmailAndPassword(auth,email,password)
    }
    
    const loginWithGoogle =(auth,provider)=>{
        setLoaing(true)
        return signInWithPopup(auth,provider)
    } 
    const forgetPassword =(auth,email)=>{
        setLoaing(true)
    return sendPasswordResetEmail(auth,email)
    
    }
    const logOut=()=>{
        setLoaing(true)
        return signOut(auth)
    }
    const shahid=() => {
        const name =[
            {
                name:'shahid'
            }
        ]
    }
    const authInfo={
        user,
        shahid,
        setUser,
        creatNewUser,
       logOut,
       userLogin,
       loginWithGoogle,
       loading,
       forgetPassword
    
       }
    
       useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{ setUser(currentUser);
            setLoaing(false)
      })
      return ()=> {unsubscribe()}
       },[])
        return (
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        );
    };


export default AuthProvider