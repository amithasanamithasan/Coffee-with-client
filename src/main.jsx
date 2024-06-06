import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Adduser from './Components/Adduser';
import Update from './Components/Update';
import Singup from './Components/Singup';
import Singin from './Components/Singin';
import AuthProviders from './Components/Providers/AuthProviders';
import Users from './Components/Users';




const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader:()=>fetch('https://coffee-store-server-hy1o0jb9n-amithasanfaysals-projects.vercel.app/coffee')
  },
  {
    path:"/adduser",
    element:<Adduser></Adduser>
  },
  {
    path:'/singup',
    element:<Singup></Singup>,
  },
  {
    path:'/singin',
    element:<Singin></Singin>,
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffee-store-server-hy1o0jb9n-amithasanfaysals-projects.vercel.app/user'),
  },
  {
    path:"/updateCoffee/:id",
    element:<Update></Update>,
    loader:({params})=> fetch(`https://coffee-store-server-hy1o0jb9n-amithasanfaysals-projects.vercel.app/coffee/${params.id}`),
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
