import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
     <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Lets Chattt..</span>
        <span className="title">Login</span>
        <form>
          
            <input type="email" className='in' placeholder='E-mail '/>
            <input type="password" className = "in"placeholder='Password' />
            <button className='btn'>Sign in</button>
        </form>
        <p className='para'> Do have an account..? Register </p>
      </div>
      </div>
  )
}

export default Login;