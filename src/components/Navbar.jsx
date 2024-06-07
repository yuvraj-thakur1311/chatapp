import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <span className='logoo'> Lets Chatt</span>
      <div className="user">
        <img src="https://tse4.mm.bing.net/th?id=OIP.0IkdUPJY6a_DGYOV_CrCLgHaHa&pid=Api&P=0&h=180" alt="" className='img1' />
        <span>Yuvii</span>
        <button className='btnn'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;