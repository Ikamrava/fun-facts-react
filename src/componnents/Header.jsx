import React from 'react'
import "./header.css"
import image from "./images/reacticon.png"


export default function HeaderFirst() {
  return (
    <div className='header-wrapper'>
      <img src={image} width="25px" height="25px" alt="React Logo"/>
      <h3 className='react-facts'>ReactFacts</h3>
      <h5>React Course - Project 1</h5>
    </div>
  )
}

