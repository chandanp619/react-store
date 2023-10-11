import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className='col pl-0 pr-0'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/store">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about-us">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/contact-us">Contact Us</a>
                    </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><FontAwesomeIcon icon={faBagShopping} /> (0)</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>    
        </div>
    </div>
  )
}
