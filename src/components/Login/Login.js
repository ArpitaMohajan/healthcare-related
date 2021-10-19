import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, processLogin } = useAuth();
    const handleLogin = (e) => {
        // console.log('nbnb')
        e.preventDefault()
    }
    // const handleRegistration = e => {
    //     // console.log(email, password)
    //     e.preventDefault()
    // }
    return (
        <div>


            <form onSubmit={handleLogin}>
                <h2 className="text-success">Please Login</h2>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" placeholder="Your Email" />
                <br />

                <label htmlFor='password'>Password:</label>
                <input type="text" name="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to  website? <Link to="/register">Create Account</Link></p>


            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;

