import React from "react";


export class Card extends React.Component {
    
    render () {
        const { user } = this.props;
        return (
        
            <div className="ag-courses_item">
                <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div>
                        <img
                            src={user.picture} 
                            alt={'Photo of ' + user.name}
                        />
                    </div>
                    <div className="ag-courses-item_title"> {user.name} </div>
    
                    <div className="ag-courses-item_date-box">
                        Company: <span className="ag-courses-item_date"> {user.company} </span>
                    </div>
                    <div className="ag-courses-item_date-box">
                        Age: <span className="ag-courses-item_date"> {user.age} </span>
                    </div>
                    <div className="ag-courses-item_date-box">
                        Gender: <span className="ag-courses-item_date"> {user.gender} </span>
                    </div>
                </div>
            </div>
    
        );
    };
    
};

