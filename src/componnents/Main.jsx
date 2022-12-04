import React from 'react'
import "./Main.css"
import image from "./images/reactjs-icon.png"

function Main() {
  return (
    <div className='mainwrapper'>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className="watermarcicon"src={image} alt="Water-Mark Logo" />
    </div>
  )
}

export default Main
