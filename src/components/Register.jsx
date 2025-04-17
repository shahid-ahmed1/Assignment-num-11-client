import { createUserWithEmailAndPassword , GoogleAuthProvider} from 'firebase/auth';
import React, { useContext, useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import auth from '../firebase/firebase';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
  const {user,setUser,creatNewUser,loginWithGoogle}= useContext(AuthContext)

  // const [error ,setError] = useState({})
  const [showPassword,setShowPassword]=useState(false)
      const handleSubmit=(e)=>{
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const photo = e.target.photo.value;
          const password = e.target.password.value;
          const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
          if (!passwordValidation.test(password)) {
            const errorMessage = "Password at least one upperCase ,one lowerCase,and 6 charecter or long";
            toast.error(errorMessage);
            return;
          }
          creatNewUser(email,password)
          .then(result=>{
            console.log(result.user);
            toast.success('Register Succesfully');
            setUser(result.user)
          
          //  navigate(location?.state?location.state:'/')

          })
          .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/email-already-in-use") {
              toast.error("This email is already in use.");
            } else if (errorCode === "auth/invalid-email") {
              toast.error("Invalid email address.");
            } else if (errorCode === "auth/weak-password") {
              toast.error("Password is too weak.");
            } else {
              toast.error("Something went wrong. Please try again.");
              toast.error(error.message);
            }
          });
         
      }
  
      const handleGoogleLogin=()=>{
        loginWithGoogle(auth,provider)
        .then(result =>{
          toast.success('Login Succesfully')
          setUser(result.user)
          // navigate(location?.state?location.state:'/')
        })
        .catch((err) => {
          const errorMessage = err.message;
          toast.error(errorMessage)
        });
      }
    return (
        <div className='my-10 w-11/12 mx-auto '>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col ">
<div className="text-center ">
  <h1 className="text-2xl font-bold">Registration now!</h1>
</div>
<div className=" card bg-base-100  max-w-xl shrink-0 shadow-2xl p-5 ">
    <form  onSubmit={handleSubmit}>
  <div className="card-body">
    <fieldset className="fieldset">Name
      <label  className="fieldset-label"></label>
      <input name='name' type="text" className="input" placeholder="Name" />
      <label  className="fieldset-label">Photo-URL</label>
      <input name='photo' type="text" className="input" placeholder="Photo-URL" />
      <label  className="fieldset-label">Email</label>
      <input name='email' type="email" className="input" placeholder="Email" />
   <div className='relative'>
   <label className="fieldset-label">Password</label>
   <input name='password' type={showPassword? 'text':'password'} className="input" placeholder="Password" />
   <button   onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 cursor-pointer top-6'>
    {
      showPassword?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
    
    }
    
</button>
   </div>

    
     
      <button className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  </div>
  <p className=''>Alredy Have An Account ? <Link className='text-red-400' to='/login'>Login</Link></p>
  </form>
  <button onClick={()=>handleGoogleLogin()} className="btn bg-white text-black mt-4 border-[#e5e5e5]">
<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
Login with Google
</button>

</div>
{/* {
        error.password && <label className="fieldset-label text-sm text-red-500">{error.password}</label>
      } */}
</div>

</div>
    </div>
    );
};

export default Register;