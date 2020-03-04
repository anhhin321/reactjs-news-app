import React, { Component } from 'react';
import dl from './dulieu.json';
import Tintuc from './Tintuc.js';
class News extends Component {
    render() {
        return (
            <div className="row">
              {
                   dl.map((value, key)=>{
                    return (
                        <Tintuc tieude={value.tieuDe} trichdan={value.trichDan} id={value.id} anh={value.anh} key={key} />
                    )
                })
              }  
            </div>
        );
    }
}

export default News;