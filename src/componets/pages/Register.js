import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
const Register = () => {
    return (
        <div>
            <div className="oram">
                <form className="login-form register " action="">
                    <h1>Please Register
                    </h1>
                    <h3>Register with Email & Password

                    </h3>
                    

                    <input className="form" type="email" placeholder="your email" /><br />
                    <input className="form" type="password" placeholder="your password" /><br />
                    <input className="form" type="email" placeholder="your email adsress" /><br />
                    <input type="photo" placeholder="your photo url" /><br />
                    <input className="form" type="submit" value="please submit" />
                    <p>Already have an account?<Link to='./login'>Register</Link>  </p>
                    <div>-----------or-------------</div>
                    <button className="btn-danger">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
