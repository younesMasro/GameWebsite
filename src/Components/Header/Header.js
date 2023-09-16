import React from 'react';
import './Header.css';
import logo from '../../Assets/Images/logo.png'

export default function Header() {
  return (
 
    <div className="navbar navbar-expand-md navbar-dark cyborg-header">
        <div className="container">
            <a href="#" className="navbar-brand"><img src={logo}></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#hero" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#features" className="nav-link">Browser</a></li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Detail</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#faq" className="nav-link">Streams</a></li>
                    <li className="nav-item"><a href="./index-ar.html" className="nav-link">Profile</a></li>
                </ul>
            </div>
        </div>
    </div>
   
  )
}
