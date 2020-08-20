import React from 'react';
import SearchResult from './searchResultComp';


class ResultsBox extends React.Component {
    render() {
        return (
            <div container fluid
                className="green lighten-5"
                style={{ padding: "2%", marginBottom: "2%", marginTop: "2%" }}>
                <h4>Results</h4>
                <SearchResult />
                <SearchResult />
            </div>
        )
    }
}

export default ResultsBox;