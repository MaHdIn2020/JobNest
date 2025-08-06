import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import loginLottie from "../../assets/Login and Sign up.json";
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((result) => {
                console.log("User logged in:", result.user);
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
        
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <Lottie
                        style={{ height: '500px', width: "500px" }}
                        animationData={loginLottie}
                    />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form className="fieldset" onSubmit={handleLogin}>
                            <label className="label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input input-bordered"
                                placeholder="Email"
                                required
                            />

                            <label className="label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="input input-bordered"
                                placeholder="Password"
                                required
                            />

                            <div className="flex gap-2 items-center mt-2">
                                <p className="">Forgot your password?</p>
                                <NavLink to="/reset-password" className="btn p-0 min-h-0 h-auto w-1/3"><button className="btn w-full">Reset</button></NavLink>
                            </div>

                            <div className="flex gap-2 items-center mt-2">
                                <p className="">Don't have an account?</p>
                                <NavLink to="/register" className="btn p-0 min-h-0 h-auto w-1/3"><button className="btn w-full">Register</button></NavLink>
                            </div>

                            <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
