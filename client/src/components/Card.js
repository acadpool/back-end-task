import React, { Component } from 'react';
import axios from 'axios';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:3001/api/deleteById/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err=>console.log(err));
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Author: {this.props.obj.author}</h5>
                    <h6><small>{this.props.obj.quote_type}</small></h6>
                    <p className="card-text">
                        {this.props.obj.content}
                    </p>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.delete}>Delete</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Id: <strong>{this.props.obj._id}</strong></small><br/>
                    <small className="text-muted">{this.props.obj.date_created}</small>
                </div>
            </div>
        )
    }
}