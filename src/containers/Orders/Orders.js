import React , {Component} from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders:[],
            loading:true
         }
    }
    componentDidMount(){
        axios.get("/orders.json")
        .then(response=>{
            const fetchOrders=[]
            for(let key in response.data){
                fetchOrders.push({...response.data[key],id:key})
            }
            this.setState({loading:false,orders:fetchOrders})
        })
        .catch(error=>{
            this.setState({loading:false})
        })
    }
    render() { 
        return ( 
            <div>
                    {this.state.orders.map(order=>(
                        <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                    ))}
            </div>
         );
    }
}
 
export default WithErrorHandler(Orders,axios);