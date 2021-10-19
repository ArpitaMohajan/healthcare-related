import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="text-success">Register: Create Account</h2>
            <form onSubmit="">
                <label htmlFor='email'>Email:</label>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <label htmlFor='password'>Password:</label>
                <input type="password" name="" id="" placeholder="Your Password" />
                <br />
                <label htmlFor='password'>Re-enter Password:</label>
                <input type="password" name="" id="" placeholder="Re-enter Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <div>----------or-------------</div>
            <br />
            <button onClick={signInUsingGoogle} className="btn-warning">Google Sign In</button>
        </div>
    );
};

export default Register;