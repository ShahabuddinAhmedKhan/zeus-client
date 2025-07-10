import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase/firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
   
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubsribe()
        }
    }, [])




    const info = {
        user,
        setUser,
        loading,
        signUp,
        login,
        signout,
        setLoading,
        

    }
    return (

        <AuthContext.Provider value={info}>
            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;