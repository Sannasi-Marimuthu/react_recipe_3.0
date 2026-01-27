import React, { useState } from 'react'
import './searchBar.scss'

const SeachBar = () => {

    const [searchBar, setSearchBar] = useState(" ")

    const handleSumbit = (e)=> {
        e.preventDefault();
        console.log( searchBar);
        setSearchBar("")
    }

  return (
    <div className='searchBar'>
        <form onSubmit={handleSumbit} >
            <input type="text" placeholder='Search...' value={searchBar} onChange={e=>setSearchBar(e.target.value)}/>
            <button type='sumbit' >Search</button>
        <h1>X</h1>
        </form>
    </div>
  )
}

export default SeachBar