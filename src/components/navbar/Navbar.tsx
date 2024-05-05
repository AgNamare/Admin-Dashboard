import React from 'react';
import "./navbar.scss"
const Navbar = () => {
return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>Lanaadmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKSB58XrNO0v8WsRmqVIyhhsGk7vMDtkjhw&usqp=CAU"
                 alt="" />
            </div>
            <img src="/settings.svg" alt="" className="icon" />
        </div>
    
    </div>
    
)
}
export default Navbar

