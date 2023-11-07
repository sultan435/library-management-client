import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading]= useState(true)

    const googleProvider = new GoogleAuthProvider()
    //create register user
    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user
    const loginUser = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleUser = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    //user logout
    const logoutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log("user account ",currentUser);
            setUser(currentUser)
            setIsLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])


    const values ={
        user,
        isLoading,
        createUser,
        loginUser,
        logoutUser,
        googleUser

    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;