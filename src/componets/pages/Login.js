import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
   
    return (
        <div>
            <div className="text">
                
                <form className="login-form" action="">
                    <h2>LOGIN</h2>
                    <input className="form" type="Your Email Address
" placeholder="your email address" /><br />
                    <input className="form" type="password" placeholder="your password" /><br />
                    <input className="form" type="submit" value="please submit" />
                    <p>Need an Account? Please Sign up <br />
                        Forget password? Reset<br />
                        <Link to="./register" >login</Link>
                    </p>
                    <div>-----------or-------------</div>
                    <button className="btn-danger"
                       >
                        
                        Google Sign In
                    </button>
                </form>
            </div>
        </div>
        
    );
};

export default Login;