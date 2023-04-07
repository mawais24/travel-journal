import React from "React"
import travelLogo from '../../public/img/logo.png'
// import viteLogo from '/vite.svg'

export default function Header(){
    return (
        <div className="header">
            <img src={travelLogo} /> 
            <p>my travel journal.</p>
        </div>
    )
}