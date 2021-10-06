import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBooth} from '@fortawesome/free-solid-svg-icons';
import {  faDollarSign} from '@fortawesome/free-solid-svg-icons';


const Event = (props) => {
    const {eventGuest} = props;
    let total=0;
    for(const person of eventGuest){
        total = total+ person.budget;

    }
    const personSIgn = <FontAwesomeIcon icon={faPersonBooth} />
    const budgetSign = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <div>
             <h4>Event Budget</h4>
                <h6> {personSIgn} Total Guest: {props.eventGuest.length}</h6>
                <h6>{budgetSign}Total Budget: {total}$ </h6>
                
        </div>
        <div>
            
        </div>
        </div>
    );
};

export default Event;