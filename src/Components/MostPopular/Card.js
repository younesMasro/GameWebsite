import React from 'react';
import popular_01 from '../../Assets/Images/popular-01.jpg';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import './Card.css'

export default function Card(props) {
    defineElement(lottie.loadAnimation);
  return (
    <div className='card1'>
    <div className='most-popular-item'>
        <div className='card-wrapper'>
            <img className='most-popular-item-image' src={popular_01}></img>
            <div className='most-popular-item-content'>
                <h4 className='most-popular-item-title'>
                    {props.title}<br></br>
                    <p>{props.categorie}</p>
                </h4> 
                <ul>
                    <li>
                    <lord-icon className='icon-1'
    src="https://cdn.lordicon.com/hmkhncjw.json"
    trigger="hover"
    colors="primary:#eee966"
    state="hover-2"
    style={{width:"25px",height:"25px"}}
    >
</lord-icon> 
                    <span>4.8</span>
                    </li>
                    <li>
                    <lord-icon className='icon-1'
    src="https://cdn.lordicon.com/hmkhncjw.json"
    trigger="hover"
    colors="primary:#eee966"
    state="hover-2"
    style={{width:"25px",height:"25px"}}
    >
</lord-icon> 
                        <span>3.2</span></li>
                </ul>
            </div>
        </div>
       </div>
    </div>
  )
}
