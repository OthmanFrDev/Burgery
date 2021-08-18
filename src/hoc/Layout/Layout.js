import React, { Component } from 'react'
import Aux from '../Auxx/Auxx'
import classes from './Layout.module.css'
import ToolBar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerOpenHandler=()=>{
        this.setState(prevState=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerOpenHandler}/>
                <SideDrawer open={this.state.showSideDrawer } 
                closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        );
    }

}

export default Layout;