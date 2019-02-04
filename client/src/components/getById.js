import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default class getById extends Component {
    constructor(props){
        super(props);
        this.onChangeSearchBar=this.onChangeSearchBar.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            id:'',
            quote:{}
        }
    }
    onChangeSearchBar(e){
        this.setState({
            id:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        let id=this.state.id;
        id = id.trim();
        axios.get('http://localhost:3001/api/getById/'+id)
        .then((res)=>{
            this.setState({
                quote:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.onSubmit} style={{marginTop:50}}>
                    <div className="form-group">
                        <input type="text" value={this.state.value} className="form-control" onChange={this.onChangeSearchBar}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Find By Id" className="btn btn-primary"/>
                    </div>
                </form>
                </div>
                <div className="container-fluid">
                {Object.keys(this.state.quote).length>0 && <Card obj={this.state.quote} key={this.props.object}></Card>}
                </div>
            </div>
        )
    }
}