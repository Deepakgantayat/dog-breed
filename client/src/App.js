import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import swal from 'sweetalert'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'

import ContactList from './components/contact/List'
import ListBreeds from './components/dogbreeds/List'

import {startLogoutUser} from './components/actions/users'

function App(props) {
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Successfully Logged out", {
          icon: "success",
        });               
        props.dispatch(startLogoutUser())
      } 
    })
   
   }

  return (
    <BrowserRouter>
    <div class="card bg-dark text-white">
    {/* <img class="card-img" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1689,w_3000,x_0,y_404/f_auto,q_auto,w_1100/v1563809078/shape/mentalfloss/28865-gettyimages-500694766.jpg" alt="responsive image"/> */}
    <div class="card-img-overlay">
    <div className = "container-fluid">
    <nav className="navbar"> 
    {/* style={{ backgroundColor: '#999' }} */}
    <a href="#" className="navbar-brand " style={{textAlign:"end", color:"black"}}>LOVE PET</a>
      <ul className="nav justify-content-end">
  
        <li className="nav-item active " ><Link to = "/" className="nav-link"  style={{textAlign:"end", color:"black"}}>Home</Link></li>
        {
          !_.isEmpty(props.user) ?(
            <div className="nav justify-content-end">
              {/* <li className="nav-item"><Link to = "/users/account" className="nav-link"  style={{color:"white"}}>Account</Link></li> */}
              <li className="nav-item"><Link to = "/dogbreedlists" className="nav-link"  style={{color:"black"}}>List All Breeds</Link></li>
             <li className="nav-item active" ><Link to ="#" className="nav-link" onClick= {handleLogout}  style={{color:"black"}}>Logout</Link></li>
          
            </div>
          ): (
            <div className="nav justify-content-end">
              <li className="nav-item"><Link to = "/users/register" className="nav-link" style={{ color:"black"}}>Register</Link></li>
              <li className="nav-item"><Link to = "/users/login" className="nav-link" style={{color:"black"}}>Login</Link></li>
            </div>
             )
          }
         </ul>
     </nav>

      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/users/register" component = {Register}/>
      <Route path = "/users/login" component = {Login}/>
      <Route path = "/users/account" component = {Account}/>

      <Route path = "/details" component = {ContactList}/>
      <Route path = "/dogbreedlists" component = {ListBreeds}/>

   
      </Switch>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)