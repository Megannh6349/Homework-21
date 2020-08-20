import React from 'react';
import { Card, Button } from 'bootstrap-4-react';
const img_src = '';

class SavedResult extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Header>Feature</Card.Header>
                    <Card.Image src={img_src} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="green lighten-2" style={{ marginRight: '1%' }}>View</Button>
                        <Button className="green lighten-2">Delete</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default SavedResult;