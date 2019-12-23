import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobData = props => (
    <tr>
        <td>{props.Jobs.CompanyName}</td>
        <td>{props.Jobs.date.substring(0,10)}</td>
        <td>{props.Jobs.comments}</td>
        <td>
            <Link to={"/edit/" + props.Jobs._id}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.Jobs._id) }}>delete</a>
        </td>
    </tr>
)

export default class JobsList extends Component {
    constructor(props) {
        super(props);
        this.deleteJob = this.deleteJob.bind(this)
        this.state = { Jobs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/jobs/')
            .then(response => {
                this.setState({ Jobs: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteJob(id) {
        axios.delete('http://localhost:5000/jobs/'+ id)
            .then(response => { console.log(response.data) });

        this.setState({
            Jobs: this.state.Jobs.filter(el => el._id !== id)
        })
    }
    JobsList() {
        return this.state.Jobs.map(currentJob => {
            return <JobData Jobs={currentJob} deleteJob={this.deleteJob} key={currentJob._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Applied Jobs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>CompanyName</th>
                            <th>Date Applied</th>
                            <th>Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.JobsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}