import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

export default class search extends Component {
    constructor(props){
        super(props);
        this.onChangeSearchBar=this.onChangeSearchBar.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


        this.state={
            quotes:[],
            query:''
        }
    }
    onChangeSearchBar(e){
        this.setState({
            query:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const queries={
            query:this.state.query
        }
        axios.post('http://localhost:3001/api/search',queries)
        .then((res)=>{
            this.setState({
                quotes:res.data
            })
        })
        this.setState({
            query:''
        })
    }
    allQuotes(){
        return this.state.quotes.map(function(quote,i){
            return <Card key={i} obj={quote} ></Card>
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{marginTop:50}}>
                    <div className="form-group">
                        <input type="text" value={this.state.query} className="form-control" onChange={this.onChangeSearchBar}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </form>
                <div className="container">
                <div className="row">
                    {this.allQuotes()}
                </div>
            </div>
            </div>
        )
    }
}