import React from 'react'

import './header.scss'
import SeachBar from '../searchBar/SeachBar'

const Header = ({title}) => {
  return (
    <div className='header'>
       <div className='title' > {title}</div>

        {/* seach bar */}
        <SeachBar />
    </div>
  )
}

export default Header