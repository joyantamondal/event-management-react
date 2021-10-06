import React from 'react';
import Guest from '../Guest/Guest';

const GuestList = (props) => {
    const {eventGuest} = props;
    return (
        <div>
            {
                eventGuest.map(guest=><Guest guest={guest}></Guest>)
            }
        </div>
    );
};

export default GuestList;