import Lottie from 'lottie-react';
import React from 'react';
import { NavLink } from 'react-router'; 
import resetPasswordLottie from "../../assets/Forgot Password.json";

const ResetPassword = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 md:py-48">
            <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
                <Lottie animationData={resetPasswordLottie} className="w-full h-auto" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
                    <form>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button type="submit" className="btn btn-neutral w-full">
                            Request Reset Link
                        </button>
                    </form>
                    <NavLink to="/login" className="block mt-4">
                        <button className="btn w-full">Back to Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
