import React from 'react'
import burgerLogo from '../../assets/images/burgery.png'
import classes from './Logo.module.css'
const logo = (props) => {
    return ( 
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="logo" />
        </div>
     );
}
export default logo;