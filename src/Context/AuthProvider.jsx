import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext('');


const AuthProvider = ({children}) => {

    const [loggedInUser, setLoggedInUser] = useState('')


    // email-password sign up function
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    //Google sign up function
    const createNewUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };


    //Sign out
    const signOutUser = () => {
        return signOut(auth);
    }


    //keep trace on logged in user

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setLoggedInUser(user)
        });
        return () => {
            unSubscribe();
        }
    }, [])
    

    const authInfo = {createNewUser, createNewUserByGoogle, signOutUser, loggedInUser };

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}