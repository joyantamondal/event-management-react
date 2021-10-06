import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Event from "../Event/Event";
import GuestList from "../GuestList/GuestList";
// import Event from "../GuestList/GuestList";
import Person from "../Person/Person";
import "./Persons.css";
const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [eventGuest,setEventGuest]= useState([]);
  useEffect(() => {
    fetch("./persons.json")
      .then((res) => res.json())
      .then((data) => {setPersons(data)});
  }, []);
const handleAddToList= person=>{
  const newGuest = [...eventGuest, person];
  setEventGuest(newGuest);
}
  return (
   <Container>
       <div className="person-container">
      <div className="persons">
          {
              persons.map(person => <Person key={person.rank} person={person} handleAddToList={handleAddToList}></Person> )
          }
      </div>
      <div className="cart-container">
               <div className="cart shadow">
               <Event eventGuest={eventGuest}></Event>
               <GuestList eventGuest={eventGuest}></GuestList>
               </div>
      </div>
    </div>
   </Container>
  );
};

export default Persons;
