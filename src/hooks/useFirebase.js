import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, handleRegistration } from "firebase/auth";
import { useHistory } from "react-router";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const auth = getAuth()
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const history = useHistory()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .finally(() => setIsLoading(false))
    }





    const logOut = () => {

        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
            setIsLoading(false)
        });
    }, [])



    return {
        user,
        isLoading,
        signInUsingGoogle,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        logOut,



    }


}
export default useFirebase;
