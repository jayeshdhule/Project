import React from 'react';
import "./LogoAnimation.scss";
import Logo from "../../../assests/img/quotify_rb_img.png"
const LogoAnimation = () =>{
    return(
        <div className='logo_animation'>
            <img src={Logo} alt="" style={{height:"20rem", width:"40rem"}}/>
        </div>
    )
};

export default LogoAnimation;