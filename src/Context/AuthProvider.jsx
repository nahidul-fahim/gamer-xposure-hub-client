import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext } from "react";
import PropTypes from 'prop-types';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext('');


const AuthProvider = ({children}) => {


    // email-password sign up function
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //Google sign up function
    const createNewUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    

    const authInfo = {createNewUser, createNewUserByGoogle };

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