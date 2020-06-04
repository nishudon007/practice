import React,{Component} from "react";
class Home extends Component{
   constructor(props){
     super(props);
      this.state={
        registration:"",email:""
       };
       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.handleChange2=this.handleChange2.bind(this);
      }
      handleChange(evt){
        this.setState({registration:evt.target.value})

         
       }
       handleChange2(evt){
        this.setState({email:evt.target.value})
      }
      
       handleSubmit(evt){
           evt.preventDefault();
           alert(`you typed:${this.state.value}`);
           this.setState=({
             registration:"",email:""
           })
       }
    render(){
        return(
               <div className="input"
                 style={{
                   backgroundImage:`url("https://i.ytimg.com/vi/F3BrKOi18lE/maxresdefault.jpg")`,backgroundRepeat:'no-repeat'
                 }}>
                   <div className="input2">
                 <form className="home" onSubmit={this.handleSubmit}>
                   <label htmlFor="reg-no">Registration</label>
                    <input type="text" name="registration" placeholder="Enter your registration number" id="reg-no"
                     value={this.state.registration} onChange={this.handleChange} />
                    <button>click</button>
                   </form>

                   <form className="home2" onSubmit={this.handleSubmit}>
                   <label htmlFor="email-id">Email</label>
                    <input type="email" name="email" placeholder="Enter your registered email" id="email"
                     value={this.state.email} onChange={this.handleChange2} />
                    <button>click</button>
                   </form>
                 </div>

               </div>
        );
    }
}
export default Home;
