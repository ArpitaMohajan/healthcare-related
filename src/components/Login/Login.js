import { getAuth } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const auth = getAuth()
const Login = () => {
    const { signInUsingGoogle, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [isLogin, setIsLogin] = useState(false)
    const handleLogin = (e) => {
        // console.log('nbnb')
        e.preventDefault()
    }
    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(email, password)
        // console.log('fgf')
        if (password.length < 6) {
            setError('Password at least 6 character')
            return
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain2 Uppercase')
            return
        }

        isLogin ? procssLogin(email, password) : createNewUser(email, password)


    }


    const procssLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const createNewUser = (email, password) => {
        // console.log('ghghg')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                verifyEmail()

            })
            .catch(error => {
                setError(error.message)
            })

    }
    const verifyEmail = () => {

    }

    return (




        <div className="mx-5">


            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please{isLogin ? 'Login' : 'Register'} </h3>
                <div className="row mb-3 p-5">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">
                    {error}
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>

    );
};

export default Login;


