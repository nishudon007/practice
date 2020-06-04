import React,{Component} from "react";
import "./login.css";
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Welcome from "./Welcome";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
               registration:"",
               password:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.goto=this.goto.bind(this);
    }
        goto(evt){
            ReactDOM.render(
                <React.StrictMode>
                  <Welcome/>
                  
                </React.StrictMode>,
                document.getElementById('root')
              );
        }
    
    handleChange(evt){
        this.setState({registration:evt.target.value})
    }
    handleChange2(evt){
        this.setState({password:evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.setState({
            registration:"",
            password:""
        })
    }
    
    render(){
        return(
            <div class="login">
                <div className="login-wrapper">
                    <h1>LOGIN</h1>
                   <form onSubmit={this.handleSubmit}>
                       <div className="registration_number">
                      <label htmlFor="registration_number">Registration number</label>
                      <input type="text" 
                      name="registration_number" 
                      value={this.state.registration}
                      id="registration_number" 
                      placeholder="Enter your registration number"
                      onChange={this.handleChange}
                      />
                      </div>
                      <div className="password">
                      <label htmlFor="password">password</label>
                      <input type="password" 
                      value={this.state.password}
                      name="password" 
                      id="password" 
                      placeholder="password"
                      onChange={this.handleChange2}
                      
                      />
                     <button type="submit"><h1>login</h1></button>
                     <button onClick={this.goto}>Next Temporary</button>
                      </div>
                   </form>
                   
                </div>
            </div>
        );
    }
}

   
export default Login;