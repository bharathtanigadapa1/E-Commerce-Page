import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === '' || password === '') {
            alert('Please enter username and password')
            return
        }

        alert('Login successful!')
        navigate('/')
    }

    const handleGoogleLogin = () => {
        alert('Continue with Google')
    }

    return (
        <div className="login-page">

            {/* Decorative background elements */}
            <div className="login-shape shape-one"></div>
            <div className="login-shape shape-two"></div>

            <div className="login-container">

                {/* Logo */}
                <div className="login-logo">
                    🛒
                </div>

                <h1>Welcome Back!</h1>

                <p className="login-subtitle">
                    Login to continue shopping with us
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">
                        <label>Username</label>

                        <div className="input-box">
                            <span>👤</span>

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <div className="input-box">
                            <span>🔒</span>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>

                </form>

                <div className="or-divider">
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    className="google-button"
                    onClick={handleGoogleLogin}
                >
                    <div className="google-logo">
                        G
                    </div>

                    <span>Continue with Google</span>
                </button>

                <p className="signup-text">
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </p>

            </div>

        </div>
    )
}

export default Login