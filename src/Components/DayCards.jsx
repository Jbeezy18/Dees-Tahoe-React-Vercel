import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';



const DayCards = ({day, date, time, work, daytotal, trans1, trans2, trans3, border}) => (
    <Container >
        <Card className='text-center g-2' border={border} data-bs-theme='dark' style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>{day}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{date} - {time}</Card.Subtitle>
                <br />
                <Card.Text>{work}</Card.Text>
                <Card.Header>Transactions:</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroupItem>{trans1}</ListGroupItem>
                    <ListGroupItem>{trans2}</ListGroupItem>
                    <ListGroupItem>{trans3}</ListGroupItem>
                    <br />           
                    <ListGroupItem>{daytotal}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    </Container>
);

export default DayCards;