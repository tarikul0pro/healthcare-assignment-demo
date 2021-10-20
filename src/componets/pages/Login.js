import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../hooks//useAuth.js';
import {
    faGoogle,
    faGithub
    
} from "@fortawesome/free-solid-svg-icons";
// login js file

const Login = () => {
    const { handleRegistration, login, error, handleNameChange, handleGoogleSign, changeEmailInput, changePasswordInput, handleChangeCkBox, handleResetPassword, } = useAuth()
    return (
        <div className="mx-5 my-5" onSubmit={handleRegistration}>
            <form>
                <h3 className="text-primary">Please {login ? 'Login' : 'Register'} </h3>
                {!login && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="enter your name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={changeEmailInput} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={changePasswordInput} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={handleChangeCkBox} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registred
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 text-danger" >{error}</div>
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button>
            </form>
            <div>-------------------------------</div>
            <br /> <br /> <br />
            <button className="btn btn-warning rounded" onClick={handleGoogleSign}><i class="fab fa-google"></i> Google Log In</button>
           

        </div>
    );
};

export default Login;