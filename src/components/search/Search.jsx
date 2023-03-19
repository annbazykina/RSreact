import React from 'react';
import './search.css'; 

export class Search extends React.Component {
    render () {
        const{query, setQuery, handleSubmitForm} = this.props;
        return (
            <div className="search-wrapper">
                <form className="form-wrapper" onSubmit={handleSubmitForm}>
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Search name..." 
                        onChange={(e) => setQuery(e)} 
                        value={query}
                        required 
                    />
                    <input 
                        type="submit" 
                        value="search" 
                        id="submit" 
                    />
                </form>
            </div>
            
        );
    }
    
};