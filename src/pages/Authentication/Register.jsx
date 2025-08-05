import React, { useState, useContext } from 'react';
import Lottie from 'lottie-react';
import registerLottie from "../../assets/register.json";
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router';

const Register = () => {
  const [role, setRole] = useState("jobSeeker");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { createUser } = useContext(AuthContext);

  const validatePassword = (value) => {
      setPassword(value);

      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

      if (!regex.test(value)) {
        setPasswordError(
          'Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, and 1 special character.'
        );
      } else {
        setPasswordError('');
      }
    };
  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8">
      <div className="w-full max-w-md lg:max-w-xl">
        <Lottie animationData={registerLottie} className="w-full h-auto" />
      </div>

      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register</h1>

          <div className="flex justify-center gap-4 my-4">
            <button
              className={`btn btn-outline ${role === 'jobSeeker' ? 'btn-active' : ''}`}
              onClick={() => setRole('jobSeeker')}
            >
              Job Seeker
            </button>
            <button
              className={`btn btn-outline ${role === 'recruiter' ? 'btn-active' : ''}`}
              onClick={() => setRole('recruiter')}
            >
              Recruiter
            </button>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="label">Name</label>
              <input name="name" type="text" className="input input-bordered w-full" placeholder="Name" />

              <label className="label">Email</label>
              <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" />

              <label className="label" on>Password</label>
              <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" onChange={(e) => {validatePassword(e.target.value)}} />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}

              <label className="label">Confirm Password</label>
              <input name="confirmPassword" type="password" className="input input-bordered w-full" placeholder="Re-enter your Password" onChange={(e) => validateConfirmPassword(e.target.value)}/>
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
              )}
            </div>

            {role === 'jobSeeker' && (
              <div className="space-y-2">
                <label className="label">Resume (PDF)</label>
                <input name="resume" type="file" accept=".pdf" className="file-input file-input-bordered w-full" />

                <label className="label">LinkedIn Profile</label>
                <input name="linkedin" type="url" className="input input-bordered w-full" placeholder="https://linkedin.com/in/..." />
              </div>
            )}

            {role === 'recruiter' && (
              <div className="space-y-2">
                <label className="label">Company Name</label>
                <input name="companyName" type="text" className="input input-bordered w-full" placeholder="Your company name" />

                <label className="label">Website (optional)</label>
                <input name="companyWebsite" type="url" className="input input-bordered w-full" placeholder="https://company.com" />
              </div>
            )}

            <div className="md:col-span-2 space-y-4 mt-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-sm">Already have an account?</span>
                <NavLink to="/login" className="btn w-full sm:w-auto">Login</NavLink>
              </div>
              <button type="submit" className="btn btn-neutral w-full" disabled={!!passwordError || !!confirmPasswordError}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
