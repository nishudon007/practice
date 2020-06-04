import React,{Component} from "react";
import "./Degree.css";




class Degree extends Component{           
    constructor(props){
     super(props);
     this.state={ 
      address_permanent:"",
      address_current:"",
      pincode:""
}
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
     handleChange(evt){
        [evt.target.name]=evt.target.value;
    }
    handleSubmit(evt){
      evt.preventDefault();
      this.setState({
         
          address_permanent:"",
          address_current:"",
          pincode:""
      })
  }
    render(){
        return(
          <div class="rooty1">
            < div className="rooty">
        <h1>NOTE: To get your degree <i class='fa fa-graduation-cap'></i> at your doorstep by post you should make a payment of <i class="fa fa-inr">2000</i> </h1>
        
        
 
          <form onSubmit={this.handleSubmit}>
            <div className="address_permanent">
                    <label htmlFor="address_permanent">permanent address</label>
                    <input type="text"
                     className=""   
                    name="address_permanent"
                    value={this.state.address_permanent} 
                    placeholder="enter your permanent address"
                    onChange={this.handleChange }
                      />
                  </div>
                  <div className="address_current">
                    <label htmlFor="address_current">current address</label>
                    <input type="text"
                     className="" 
                    placeholder="enter your current address"
                    name="address_current"
                    value={this.state.address_current} 
                    onChange={this.handleChange }
                       />  
                  </div>
                  <div className="pincode">
                    <label htmlFor="pincode">pincode</label>
                    <input type="text"
                     className="" 
                    placeholder="enter your pincode"
                    name="pincode"
                    value={this.state.pincode} 
                    onChange={this.handleChange }
                      />
                    <button type="submit">submit</button>
                  </div>
          </form>
        </div>
        </div>
        );
    }
  
}
export default Degree;