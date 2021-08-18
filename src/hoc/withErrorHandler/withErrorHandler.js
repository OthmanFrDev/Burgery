import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal';
import Auxx from '../Auxx/Auxx';
const WithErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        constructor(props){
            super(props)
            this.state={
                error:null
            }
            // axios.interceptors.request.use(request=>{
            //     this.setState({error:null})
            //     return request
            // })
            // axios.interceptors.response.use(response=>response,error=>{
            //     this.setState({error:error});
            // })
        }
        
        componentWillMount(){
            axios.interceptors.request.use(request=>{
                this.setState({error:null})
                return request
            })
            axios.interceptors.response.use(response=>response,error=>{
                this.setState({error:error});
            })
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }
        render() {
            return (
                <Auxx>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxx>
            )
        }

    }

}

export default WithErrorHandler;