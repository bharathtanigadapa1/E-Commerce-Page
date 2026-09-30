import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()

        if (!name || !email || !mobile || !password) {
            alert('Please fill all the fields')
            return
        }

        if (mobile.length !== 10) {
            alert('Please enter a valid 10-digit mobile number')
            return
        }

        alert('Signup successful!')

        navigate('/login')
    }

    return (
        <div className="signup-page">

            {/* Animated background */}
            <div className="signup-shape signup-shape-one"></div>
            <div className="signup-shape signup-shape-two"></div>

            <div className="signup-container">

                {/* Logo */}
                <div className="signup-logo">
                    🛒
                </div>

                <h1>Create Account</h1>

                <p className="signup-subtitle">
                    Join us and start shopping today
                </p>

                <form onSubmit={handleSignup}>

                    {/* Name */}
                    <div className="signup-input-group">
                        <label>Name</label>

                        <div className="signup-input-box">
                            <span>👤</span>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="signup-input-group">
                        <label>Email</label>

                        <div className="signup-input-box">
                            <span>✉️</span>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="signup-input-group">
                        <label>Mobile Number</label>

                        <div className="signup-input-box">
                            <span>📱</span>

                            <input
                                type="tel"
                                placeholder="Enter 10-digit mobile number"
                                value={mobile}
                                maxLength="10"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="signup-input-group">
                        <label>Password</label>

                        <div className="signup-input-box">
                            <span>🔒</span>

                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="signup-button"
                    >
                        Create Account
                    </button>

                </form>

                <div className="signup-divider">
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>

                <p className="login-text">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>
    )
}

export default Signup