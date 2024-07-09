import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

const CardBox = ({item}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imgSrc} height="300px" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.content}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.title}</ListGroup.Item>
                    <ListGroup.Item>{item.birthYear}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={item.SNS}>인스타그램</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBox