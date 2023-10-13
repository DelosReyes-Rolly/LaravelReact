import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {useStateContext} from "../context/ContextProvider";
import axiosClient from '../axios-client';

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext();

    
    const onSubmit = (e) =>{
        e.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        axiosClient.post('/signup', payload).then(({data})=>{
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                setErrors(response.data.errors)
            }
        })
    }

    return (
        <div>
            <header className = "top-area">
                <div className = "header-area">
                    <nav className = "navbar navbar-default bootsnav navbar-fixed dark no-background">
                    <div className = "container">
                        <div className = "navbar-header">
                        <button type="button" className = "navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className = "fa fa-bars"></i>
                        </button>
                        <a className = "navbar-brand" href="index.html">React + Laravel</a>
                        </div>
                        <div className = "collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul className = "nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className = " smooth-menu active"></li>
                            <li className = "smooth-menu"><Link to="/home">Home</Link></li>
                            <li className = "smooth-menu"><Link to="/login">Login</Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className = "clearfix"></div>
            </header>
            <div id="welcome-hero" className='login-signup-form animated fadeInDown welcome-hero'>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12 text-center">
                            <div className = "header-text">
                                <div className='form'>
                                    <form onSubmit={onSubmit}>
                                    <h1 className='title'>
                                        Signup for free
                                    </h1>
                                    {
                                        errors && <div className='alert'>
                                        {Object.keys(errors).map(key=>(
                                            <p key={key}>{errors[key][0]}</p>
                                        ))}
                                        </div>
                                    }
                                    <input ref={nameRef} placeholder="Full Name"/>
                                    <input ref={emailRef} type="email" placeholder="Email"/>
                                    <input ref={passwordRef} type="password" placeholder="Password"/>
                                    <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation"/>
                                    <button className="btn btn-block">Login</button>
                                    <p className='message'>
                                        Already Registered? <Link to="/login">Sign in</Link>
                                    </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
