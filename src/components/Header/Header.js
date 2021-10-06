import React from 'react';
import './Header.css';

const Header = () => {
// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

    return (
        <div className="">
                 <div className="row header">
                    <h3>Live Event With Some World Richest Person</h3> <br />
                    <p>
                       Your will learn how to become success in life. They share their life style, educational background and their research fields. <br /> Life changing event. Don't miss this event. keep eyes on our website.
                    </p>
                    <h6>Remaining <p id="demo"></p></h6>
                    <h5>Total Event Cost :  50000$</h5>
                 </div>
            
        </div>
    );
};

export default Header;