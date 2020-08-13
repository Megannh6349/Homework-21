import React from 'react';
import { TextInput, Button, Icon } from 'react-materialize';

class SearchBox extends React.Component {
    render() {
        return (
            <div container fluid
                className="green lighten-5"
                style={{ padding: "2%", marginBottom: "2%", marginTop: "2%" }}>
                <h4>Book Search</h4>
                <TextInput
                    id="TextInput-4"
                    placeholder="The Stand"
                />
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                    className="green lighten-2"
                >
                    Submit
                <Icon right>search</Icon>
                </Button>
            </div>
        )
    }
}

export default SearchBox;