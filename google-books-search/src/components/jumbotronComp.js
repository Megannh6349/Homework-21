import React from 'react';
import { Jumbotron, Container, Display4 } from 'bootstrap-4-react';

class JumbotronComp extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="green lighten-2"
                style={{ marginBottom: "0px" }}>
                    <Container className="text-white">
                        <Display4>(React) Google Books Search</Display4>
                        <p>Search for and Save Books of Interest</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default JumbotronComp;