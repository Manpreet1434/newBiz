import React from 'react'
import logo from '../img/logo.png'

function MainLogo(){
    return(
        <div className="logo float-left">
            <a href="#intro" className="scrollto">
                <img src={logo} alt="" className="img-fluid"/>
            </a> 
        </div>
    )
}

export default MainLogo

