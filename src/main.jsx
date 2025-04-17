import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Roots from './components/Roots.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
<ToastContainer></ToastContainer>
  </StrictMode>,
)
