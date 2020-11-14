import React from 'react'

function NavigationBar(){
    return(
        <div>
            <nav className="main-nav float-right d-none d-lg-block">
                <ul>
                <li className="active"><a href="#intro">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li className="drop-down"><a href="">Drop Down</a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="drop-down"><a href="#">Drop Down 2</a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar