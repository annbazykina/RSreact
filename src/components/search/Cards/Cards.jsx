import React from "react";
import './card.css';
import { Card } from "./Card";

export class Cards extends React.Component {

    render() {
        return (
                <div className="ag-format-container">
                    <div className="ag-courses_box">
                        {/* {this.props.users.filter(user => user.name.toLowerCase().includes(this.props.query)).map(user => <Card key={user._id} user={user} />)} */}
                        {this.props.users.map(user => <Card key={user._id} user={user} />)}
                    
                    </div>
                </div>
        );
    }
}
