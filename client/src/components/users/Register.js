import React from 'react'
import {startResgisterUser} from '../actions/users'
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startResgisterUser(formData, this.props))
        
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                    <img class="card-img" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1689,w_3000,x_0,y_404/f_auto,q_auto,w_1100/v1563809078/shape/mentalfloss/28865-gettyimages-500694766.jpg" alt="responsive image"/>
                </div>
                <div className="col-md-6">
                    <br/>
                <h2 style={{color: "black"}}>Register</h2>
                <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label style={{color: "black"}}> Username </label>
                    <input type = "text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username" className="form-control"/>
                    </div>
                <div className="form-group">
                    <label style={{color: "black"}}> Email </label>
                    <input type = "text" value={this.state.email} onChange={this.handleChange} name="email" placeholder = "email" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label style={{color: "black"}}> Password </label>
                    <input type = "password" value={this.state.password} onChange={this.handleChange} name="password" placeholder = "password" className="form-control"/>
                    </div>
                    
                    <input type ="submit" className="btn btn-primary btn-lg btn-block"/>      
                </form>
                </div>
               
            </div>
        )
    }
}

export default connect()(Register)