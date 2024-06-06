import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { createContext, useState } from "react";

import auth from'../firebaseauth/firebase.config'


export const AuthContext=createContext(null)
  


const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)
    const [lodaer ,setLodaer]=useState()

const createuser=( email,password)=>{
    setLodaer(true)
return createUserWithEmailAndPassword(auth, email,password)

}
const singinuser=(email,password)=>{
  
    return  signInWithEmailAndPassword(auth,email,password)
}


     
  const userInfo=
  {
  user,
  lodaer,
  createuser,
  singinuser,
  }



  
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;