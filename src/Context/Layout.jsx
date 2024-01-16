import React, { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebaseconfig";

export const Context = createContext();

export function Layout({children}) {
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        if(currentUser) setUser(currentUser)
        else{setUser(null)}
    });
    return () => {
        if(unsubscribe) unsubscribe();
    }
  },[])
  const values = {
    user: user,
    setUser: setUser
  }
  
  return <Context.Provider value={values}>  
        {!loading && children }
    </Context.Provider>
}

