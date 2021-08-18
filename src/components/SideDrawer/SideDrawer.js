import React from 'react'
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import BackDrop from '../UI/Backdrop/Backdrop'
import Auxx from '../../hoc/Auxx/Auxx';

const sideDrawer = (props) => {
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open]
    }
    return (
        <Auxx>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxx>
    );
}

export default sideDrawer;