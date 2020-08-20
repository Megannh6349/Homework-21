import React from 'react';
import SavedResult from './savedResultComp';

class SavedBox extends React.Component {
    render() {
        return (
            <div container fluid
                className="green lighten-5"
                style={{ padding: "2%", marginBottom: "2%", marginTop: "2%" }}>
                <h4>Saved Books</h4>
                <SavedResult />
                <SavedResult />
            </div>
        )
    }
}

export default SavedBox;