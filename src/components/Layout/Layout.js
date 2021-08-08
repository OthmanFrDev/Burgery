import React from 'react'
import Aux from '../../hoc/Auxx'
const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, backdoor</div>
            <main>{props.children}</main>
        </Aux>
    );
}

export default Layout;