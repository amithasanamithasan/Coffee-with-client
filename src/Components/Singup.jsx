import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";

import Swal from "sweetalert2";


const Singup = () => {

    const {createuser}=useContext(AuthContext)


 const handelsignupuser=e=>{
    e.preventDefault()
const email= e.target.email.value
const password=e.target.password.value
 console.log(email,password);

 createuser(email,password)
 .then(result=>{
    console.log(result.user)

    const createdAt=result.user.metadata.creationTime;
    const user={email,createdAt:createdAt};

    fetch('https://coffee-store-server-hy1o0jb9n-amithasanfaysals-projects.vercel.app/user',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId)
            Swal.fire({
                title: " User Sing_Up successfully!",
                text: "You clicked the button!",
                icon: " User Sing_Up successfully"
              });
    })

 })
 .catch(error=>{
    console.log(error)
 })
 }



    return (
        <div className="hero min-h-screen bg-base-200">
              
        <div className="hero-content flex-col ">
   
          <div className=" text-center">
    
          <h1 className="text-5xl font-bold">Sing-Up!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handelsignupuser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing-Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Singup;