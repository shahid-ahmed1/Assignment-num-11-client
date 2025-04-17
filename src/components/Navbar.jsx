

import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

// import logo  from '../assets/logo.jpeg'
const Navbar = () => {
    const navigate = useNavigate();
    const {user,logOut}= useContext(AuthContext);
const handleLogOut = ()=>{
logOut()
.then(()=>
  toast.success('LogOut Succesfully')
)
}

const links =<>
   
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/brands'>Brands</NavLink></li>


{/* {
  user && <li><NavLink to='/profile'>My Profile</NavLink></li>
} */}
<li><NavLink to='/about'>About Dev</NavLink></li>

</>

    return (
        <div>
      <div className="navbar pt-1   shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex gap-3 items-center'>
   
    {/* <img className='rounded-2xl w-12' src='' alt="logo" /> */}
    <a className="btn btn-ghost text-xl">Discount PRO</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">

    {
     user ? <div className='flex items-center gap-3'>
      <img className='w-10 h-10 rounded-full' src={user.
photoURL} alt="" />
      <p>{user.email}</p>
      
      <button onClick={()=>handleLogOut()} className='btn '>LogOut</button>
      </div>
       : 
       <div>
        <a onClick={()=>navigate('/login')} className="btn">Login</a>
        </div>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;