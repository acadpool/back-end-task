import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

export default class getAll extends Component {
    constructor(props){
        super(props);
        this.state={quotes:[]};
    }


    componentDidMount(){
        axios.get('http://localhost:3001/api/getAll')
        .then((res)=>{
            this.setState({quotes:res.data});
        })
        .catch(function(err){
            console.log(err);
        })
    }
    allQuotes(){
        return this.state.quotes.map(function(quote,i){
            return <Card key={i} obj={quote} ></Card>
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row flex-row ">
                    {this.allQuotes()}
                </div>
            </div>
        )
    }
}