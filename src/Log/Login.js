import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Context/UseContext';

const Login = () => {

    const { signGoogle, loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const login=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const pass = form.password.value
        //login user
        loginUser(email,pass)
        .then(result=>{
            const user = result.user
            navigate(from, {replace: true})
            console.log(user);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    //google sign
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
        <div>
           <h3 className='text-center text-3xl font-bold py-4 mt-4'>Log In</h3>
            <div className="signuppage grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-8 gap-6">
                <img src="https://www.planstudyabroad.uniagents.com/images/login.png" alt="" />           
                <div className="signup mt:0 lg:mt-20">                  
                <form onSubmit={login}>
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
            <button className="btn btn-primary">Login</button>
          </div>
          </form>
          <div className="form-control mt-6">
        <button onClick={googleSign} className="btn btn-outline btn-primary">Sign In Google</button>
        </div>
        <p className='text-center py-2 font-medium'>Don't Have an Account? <Link to='/signup'><span className='text-orange-600 font-bold'>Sign Up</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;