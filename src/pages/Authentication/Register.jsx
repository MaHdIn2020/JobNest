import React, { useState } from 'react';
import Lottie from 'lottie-react';
import registerLottie from "../../assets/register.json";

const Register = () => {
  const [role, setRole] = useState("jobSeeker");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left ">
          <Lottie style={{ height: '550px', width: "500px" }} animationData={registerLottie} />
        </div>

        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register</h1>

            <div className='flex justify-center gap-4 mb-4'>
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

            <form className="fieldset space-y-2 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className='space-y-2'>
                <label className="label">Name</label>
                <input name="name" type="text" className="input input-bordered w-full" placeholder="Name" />

                <label className="label">Email</label>
                <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" />

                <label className="label">Confirm Password</label>
                <input name="confirmPassword" type="password" className="input input-bordered w-full" placeholder="Re-enter your Password" />
            </div>

            {role === 'jobSeeker' && (
                <div className='space-y-2'>
                <label className="label">Resume (PDF)</label>
                <input name="resume" type="file" accept=".pdf" className="file-input file-input-bordered w-full" />

                <label className="label">LinkedIn Profile</label>
                <input name="linkedin" type="url" className="input input-bordered w-full" placeholder="https://linkedin.com/in/..." />
                </div>
            )}

            {role === 'recruiter' && (
                <div className='space-y-2'>
                <label className="label">Company Name</label>
                <input name="companyName" type="text" className="input input-bordered w-full" placeholder="Your company name" />

                <label className="label">Website (optional)</label>
                <input name="companyWebsite" type="url" className="input input-bordered w-full" placeholder="https://company.com" />
                </div>
            )}

            <div className='col-span-2'>
                <a className="link link-hover text-sm">Forgot password?</a>
                <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
