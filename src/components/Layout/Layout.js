import React from 'react'
import Aux from '../../hoc/Auxx'
import classes from './Layout.module.css'
const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, backdoor</div>
            <main className={classes.content}>{props.children}</main>
        </Aux>
    );
}

export default Layout;