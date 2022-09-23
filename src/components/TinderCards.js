import React, { useState } from "react";
import  TinderCard  from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
  const [lastDirection, setLastDirection] = useState();
  const [peoples, setPeoples] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Jeff Bezoz",
      url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
    },
    {
      name: "Bill Gates",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
    },
  ]);
  const swiped = (direction, nameToSwap) => {
    console.log("Removing", nameToSwap);
    setLastDirection(direction);
  };
  const onCardLeftScreen = (name) => {
    console.log(name + "Left the screen");
  };
  return (
    <div className="tinderCards">
        <div className="tinderCards_cardContainer">
        {peoples.map((people, index) => (
       
          <TinderCard
          
          className="swipe"
          key={people.name}
          onSwipe={(dir) => {
            swiped(dir, people.name);
          }}
          onCardLeftScreen={() => onCardLeftScreen(people.name)}
          preventSwipe={["right", "left"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${people.url})` }}
            >
              <h1>{people.name}</h1>
            </div>
           </TinderCard>
     
      ))}
        </div>
    </div>
  );
}

export default TinderCards;
