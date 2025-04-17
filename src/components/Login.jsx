
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import auth from '../firebase/firebase';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
  console.log(auth)
  const {userLogin,setUser,loginWithGoogle, forgetPassword} =useContext(AuthContext)
  const provider = new GoogleAuthProvider()
  // const [error ,setError] = useState()
    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        userLogin(email,password)
        .then(result=>{
          toast.success('Login Succesfully')
          setUser(result.user);
          // navigate(location?.state?location.state:'/')
        })
        .catch((error) => {
     const errorCode = error.code;
            console.log(errorCode)   
                if (errorCode === "auth/invalid-email") {
                  toast.error("Invalid email address.");
                  return
                } 
                else if (errorCode === "auth/invalid-credential") {
                  toast.error("Wrong Password .");
                  return
                }
                  toast.error(error.message);
                }
        );
       
      }
    
      const handleGoogleLogin=()=>{
        loginWithGoogle(auth,provider)
        .then(result =>{
          toast.success('Login Succesfully');
          setUser(result.user)
          // navigate(location?.state?location.state:'/')
        })
        .catch((err) => {
          const errorMessage = err.message;
         
          toast.error(errorMessage)

        });
    
        
      }
      const handleForgetPassword=()=>{
        
        const email =(emailRef.current.value)
    if(!email){
      toast.error('please provide a valid email');
   
    }
    else{
      forgetPassword(auth,email)
      .then(()=>{
        toast.success('password reset cheak your email ');
      })
    }
       
      
      }
    return (
        <div>
             <div className='min-h-screen'>
        <div className="hero bg-base-200 min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
<h3 className='
    text-2xl font-semibold text-center'>Login Your Acount</h3>
    <form onSubmit={handleLogin}>
  <div className="card-body">
    <fieldset className="fieldset">
      <label className="fieldset-label">Email</label>
      <input type="email" name='email'
    //   ref={emailRef}
       className="input" placeholder="Email" />
      <label  className="fieldset-label">Password</label>
      <input type="password" name='password' className="input" placeholder="Password" />
      <div><a  onClick={()=>handleForgetPassword()} className="link link-hover">Forgot password?</a></div>

     {
      // error && <label  className="fieldset-label text-red-500 textarea-sm">{error}</label>
     }
      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>

    
  </div>
  </form>
  
  <p>Don't Have An Account ? <Link className='text-red-400' to='/register'>Register</Link></p>
  <button onClick={()=>handleGoogleLogin()} className="btn bg-white text-black mt-4 border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>

</div>
</div>
<ToastContainer></ToastContainer>
    </div>
        </div>
    );
};

export default Login;