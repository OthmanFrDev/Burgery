import React, {Component} from "react";
import Auxx from "../../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Auxx>
                <Burger/>
                <div>build Controls</div>
            </Auxx> 
         );
    }
}
 
export default BurgerBuilder;