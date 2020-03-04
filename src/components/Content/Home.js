import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";
import dl from './dulieu.json';
import Tinlq from './Tinlq.js';
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.log("id:"+this.props.match.params.id);
  
    
  }
  
    render() {
      
     
  
      
        var dem=1;
        return (
            <div>
          {
            dl.map((value, key)=>{
              if(value.id == this.props.match.params.id){
                return(
                  <div>
                    <img src={value.anh} />
                    <h5>{value.tieuDe} </h5>
                    <i>{value.trichDan} </i>
                    <p>{value.noiDung} </p>
                    
                  </div>
                )
              }

            })
          }
          <div className="row">
                      {
                        dl.map((value,key)=>{
                          if(value.id != this.props.match.params.id){
                          if(dem <= 4){
                            dem++;
                            return (
                              
                                <Tinlq tieude={value.tieuDe} trichdan={value.trichDan} id={value.id} anh={value.anh} key={key} />
                                
                            )
                          }
                        }
                        })
                      }
                    </div>
            </div>
        );
    }
}

export default Home;