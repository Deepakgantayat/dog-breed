import React, { useState } from 'react';
import {connect} from 'react-redux'
import {startLoginUser} from '../actions/users'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render(){
        // const [modal, setModal] = useState(false);
         return(
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <img class="card-img" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1689,w_3000,x_0,y_404/f_auto,q_auto,w_1100/v1563809078/shape/mentalfloss/28865-gettyimages-500694766.jpg" alt="responsive image"/>
                </div>
                <div className="col-md-6">
                    <br/>
                <h2 style={{color: "black"}}>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                <div className="form-group">                        
                    <label style={{color: "black"}}> Email </label>
                    <input type = "text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email"className="form-control"/>
                    <div style={{color:"red"}}>{this.state.emailError}</div> 
                    </div>
                   
                    <div className="form-group">
                   
                    <label style={{color: "black"}}> Password </label>
                    <input type = "password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" className="form-control"/>
                    <div style={{color:"red"}}>{this.state.passwordError}</div> 
                    </div>
                    <input type ="submit" className="btn btn-primary btn-lg btn-block"/>      
                </form>
                
               
                </div>
            </div>
           
        )
    }
}


export default connect()(Login)