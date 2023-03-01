import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Context/UseContext';
import './Style.css'

const SignUp = () => {
    const { user,setuser,createUser,signGoogle, updateUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
  
    const signUp=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const pass = form.password.value

        //create User
        createUser(email,pass)
        .then(result=>{
            console.log(result.user);
            updateUserProfile(name,image)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    //updateUser Profile
    const updateUserProfile=(name,img)=>{
        const profile={
            displayName : name,
            photoURL: img
        }
        updateUser(profile)
    }
    //google signup
    const googleSign =()=>{
        signGoogle()
        .then(result=>{
            console.log(result.user);
            navigate(from, {replace: true})
        })
        .catch(err=>{
            console.log(err);
        })

    }
    return (
        <div className="">
             <h3 className='text-center text-3xl font-bold py-4 mt-4'>Sign Up</h3>
            <div className="signuppage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-8 gap-6">
                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000" alt="" />           
                <div className="signup">                  
                <form onSubmit={signUp} >
               <div className="form-control">
                 <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="text" name='image' placeholder="image" className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>       
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          </form>
          <div className="form-control mt-6">
        <button onClick={googleSign } className="btn btn-outline btn-primary">Sign In Google</button>
        </div>
        <p className='text-center py-2 font-medium'>Already Have an Account? <Link to='/login'><span className='text-orange-600 font-bold'>Log in</span></Link></p>
                </div>
            </div>










        
  </div>
    );
};

export default SignUp;