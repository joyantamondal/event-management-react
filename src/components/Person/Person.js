import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Person.css';
const Person = (props) => {
    const {name,img,owner, asset,country,age,budget}= props.person;
    const element = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
        <div className="person">

            <div>
            <Row>
            <Col>
              <CardGroup>
                <Col>
                <Card className="card shadow">
                  <Card.Img className="imgg" variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      CEO: {owner}
                    </Card.Text>
                    <Card.Text>
                      Asset: {asset}
                    </Card.Text>
                    <Card.Text>
                     Country: {country}
                    </Card.Text>
                    <Card.Text>
                     Age: {age}
                    </Card.Text>
                    <Card.Text>
                     Event Cost: {budget}$
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button  onClick={()=>props.handleAddToList(props.person)} className="add-btn shadow">{element} add to event</Button>
                  </Card.Footer>
                </Card>
                </Col>
              </CardGroup>
            </Col>
          </Row>
            </div>
        </div>
    );
};

export default Person;