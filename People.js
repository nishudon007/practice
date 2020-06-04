import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Join from "./Join";
import "./People.css";
class People extends Component{
    constructor(props){
        super(props);

    }
    join2(evt){
        ReactDOM.render(
            <React.StrictMode>
              
              <Join/>
            </React.StrictMode>,
            document.getElementById('root')
          );
         
    }
    render(){
        return(
            <div className="People">



                      <form>
                         <label htmlFor="quantity">People (between 1 and 4):</label>
                         <input type="number" id="quantity" name="quantity" min="1" max="4"/>
                         <input onClick={this.join2} type="submit"/>
                     </form>



               

                
            </div>
        );
    }
}
export default People;