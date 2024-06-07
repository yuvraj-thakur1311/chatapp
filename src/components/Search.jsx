import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input  className="inp"type="text" placeholder='Find a user' />
      </div>
      <div className="userchat">
        <img src="https://tse4.mm.bing.net/th?id=OIP.0IkdUPJY6a_DGYOV_CrCLgHaHa&pid=Api&P=0&h=180" className='img2' />

        <div className="userChatinfo">
          <span>Hemant</span>
        </div>
      </div>
    </div>
  )
}

export default Search