import React from 'react'
import "./header.css"
import image from "./images/reacticon.png"


export default function HeaderFirst(props) {
  console.log(props)
  return (
    
    <nav className= {props.darkMode ? "dark header-wrapper" : "header-wrapper"}>
      <img src={image} width="25px" height="25px" alt="React Logo"/>
      <h3 className='react-facts'>ReactFacts</h3>
      <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
    </nav>
  )
}

