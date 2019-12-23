import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class AddJob extends Component {

    constructor(props) {
        super(props);           //super, bindings and state object
        this.onChangeCompanyName=this.onChangeCompanyName.bind(this)
        this.onChangecomments=this.onChangecomments.bind(this)
        this.onChangeDate=this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state = {          //in JSON object format for mongoose
            CompanyName:'',
            comments:'',
            date:new Date()
        }
    }
    
    onChangeDate(date) {
        this.setState({
          date:date
        })
      }
    onChangeCompanyName(e){
        this.setState({
            CompanyName:e.target.value
        })
    }
    onChangecomments(e){
        this.setState({
            comments:e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
    
        const Jobs = {
          CompanyName: this.state.CompanyName,
          comments: this.state.comments,
          date: this.state.date
        }
    
        axios.post('http://localhost:5000/jobs/add', Jobs)
        .then(res => console.log(res.data));
    
      window.location = '/';
    }
    
    

    render() {
        return ( 
        <div>
            <h3>Add new Job Application Entry</h3>
            <form onSubmit={this.onSubmit}>
            
            
            <div className="form-group"> 
                <label>CompanyName: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.CompanyName}
                    onChange={this.onChangeCompanyName}
                    />
              </div>
              <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          </div>


              <div className="form-group"> 
                <label>Comments: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.comments}
                    onChange={this.onChangecomments}
                    />
              </div>
             
              <div className="form-group">
                <input type="submit" value="Add Job" className="btn btn-primary" />
              </div>
            </form>
          </div>
            
            )
        }

    }

