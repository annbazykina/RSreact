import React from "react";
import { Cards } from "./search/Cards/Cards";
import { Search } from "./search/Search";
import { userData } from "../userData";

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: '',
            users: [...userData],
            search: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        
        this.setState({users: this.state.users.filter(user => user.name.toLowerCase().includes(this.state.query))})
    };

    handleChange = (e) => {
        this.setState({query: e.target.value});
        // localStorage.getItem('Input value');
    };

    render () {
        // localStorage.setItem('Input value', this.state.query);
        return (
            <div className="wrapper">
                <Search query={this.state.query} setQuery={this.handleChange} handleSubmitForm={this.handleSubmitForm}  />
                <Cards query={this.state.query} users={this.state.users} search={this.state.search} />
            </div>
        );
    }
    
};