import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login.js";
import Home from "./index_pract";

import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    }
   
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({name:evt.target.value})
  }
  handleSubmit(evt){
    evt.preventDefault();
    this.setState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        Registration_number:""
    })
  }
  
  render(){
    

    return(
      <Router>
      <div class="wrapper">
        <div className="form-wrapper">
        
              <h1>Create Account</h1>
              <form onSubmit={this.handleSubmit}>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text"
                     className="" 
                    placeholder="First Name"
                    name="firstName" 
                    value={this.state.firstName}
                    onChange={this.handleChange }
                    />
                  </div>

                  <div className="lastName">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text"
                     className="" 
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName} 
                    onChange={this.handleChange }
                    />
                  </div>
                 
                  <div className="Registration_number">
                    <label htmlFor="Registration_number">Registration_No</label>
                    <input type="text"
                     className="" 
                    placeholder="Registration_number"
                    name="Registration_number" 
                    value={this.state.Registration_number}
                    onChange={this.handleChange }
                    />
                  </div>


                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                     className="" 
                    placeholder="email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange }
                    />
                  </div>
                  
                  <div className="password">
                    <label htmlFor="password">password</label>
                    <input type="password"
                     className="" 
                    placeholder="password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange }
                    />
                  </div> 
                  <div className="createAccount">
                    <button type="submit">Create Account</button>
                               
                                 
                                       
                                       <Route  path='/Login' exact strict component={Login} 
                                       
                                       />
                                         <ul>
                                            <li>

                                                <Link to="/Login" exact strict >Already Have an Account ?</Link>
                                            </li>
                                          </ul>

                                       
                                  

                  </div>
              </form>
              
        </div>   
        
      </div>
      </Router>
    );
  }
}

export default App;
