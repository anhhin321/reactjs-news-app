import React, { Component } from 'react';
import { useParams } from 'react-router';

class Child extends Component {
    render() {
        let { id } = useParams();
        return (
            <div>
      <h3>ID: {id}</h3>
                
            </div>
        );
    }
}

export default Child;