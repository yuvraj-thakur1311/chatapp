import React, { useState } from 'react'
import Add from "../img/addAvatar.png";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

const Register = () => {
   const [err , setError] = useState(false)
  const handleSubmit = async(e) => {
    e.preventDeafult()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(err){
         setError(true);
    }
  };
  return (
     <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Lets Chattt..</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" className ="in"placeholder='Name' />
            <input type="email" className='in' placeholder='E-mail '/>
            <input type="password" className = "in"placeholder='Password' />
            <input className='no' type="file" id="file"/>
            <label  className="lbl" htmlFor="file"> 
                <img src={Add}  className="img"alt="" />
                <span> Add an Avatar</span>
                </label>
            <button className='btn'>Sign up</button>
            {err && <span>Something went wrong </span>}
        </form>
        <p className='para'> Do have an account..? Login </p>
      </div>
      </div>
  )
}

export default Register;