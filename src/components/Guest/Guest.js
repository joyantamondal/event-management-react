
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Guest.css'
const Guest = (props) => {
    const {name,img} =props.guest;
    // console.log(guest.name)
    return (
        <div>
            <div className="guest">
            <Row>
            <Col>
                <Col>
                <Card className="card shadow">
                  <Card.Img className="imgg" variant="top" src={img} />
                    <Card.Title>{name}</Card.Title>
                </Card>
                </Col>
            </Col>
          </Row>

            </div>
        </div>
    );
};

export default Guest;