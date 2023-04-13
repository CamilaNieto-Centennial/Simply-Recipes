import React from 'react'
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

library.add(faAlignJustify)

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return ( 
        <>
        <nav className="centerFlexbox">
            <ul>
                <div className="nav-header">
                    <li><Link to="/"><img src="./assets/logo.svg" alt="Logo" /></Link></li>
                    <li>
                        <button type='button' className='btn nav-btn' onClick={handleClick}>
                            <FontAwesomeIcon icon="fa-solid fa-align-justify" />
                        </button>
                    </li>
                </div>
                <div className={isActive ? "nav-body show-links" : "nav-body"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/contact"><div className="contact-link"><a href="" className="btn">Contact</a></div></Link></li>
                </div>
            </ul>
        </nav>
        </>
    );
}
 
export default Header;