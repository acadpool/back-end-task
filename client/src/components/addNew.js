import React, { Component } from 'react';
import axios from 'axios';

export default class addNew extends Component {
    constructor(props){
        super(props);
        this.onChangeAuthor=this.onChangeAuthor.bind(this);
        this.onChangeContent=this.onChangeContent.bind(this);
        this.onChangeQuoteType=this.onChangeQuoteType.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            author:'',
            quote_type:'',
            contnt:'',
        }
    }

    onChangeAuthor(e){
        this.setState({
            author:e.target.value
        });
    }
    onChangeContent(e){
        this.setState({
            content:e.target.value
        });
    }
    onChangeQuoteType(e){
        this.setState({
            quote_type:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const quote={
            author:this.state.author,
            quote_type:this.state.quote_type,
            content:this.state.content
        }
        axios.post('http://localhost:3001/api/add',quote)
        .then((res)=>{
            console.log(res.data);
        })
        this.setState({
            author:'',
            quote_type:'',
            content:'',
        })
    }
    render() {
        return (
            <div>
                <h3>Add new Quote</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" value={this.state.author} className="form-control" onChange={this.onChangeAuthor}></input>
                    </div>
                    <div className="form-group">
                        <label>Quote Type</label>
                        <input type="text" value={this.state.quote_type} className="form-control" onChange={this.onChangeQuoteType}></input>
                    </div>
                    <div className="form-group">
                        <label>Quote</label>
                        <textarea value={this.state.content} className="form-control" onChange={this.onChangeContent}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add New Quote" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}