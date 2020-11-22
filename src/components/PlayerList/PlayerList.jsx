import React, {useState} from "react";
import styles from "./PlayerList.module.scss";
import playerArr from "../../data/footballers";


const PlayerList = () => {

// i'll need a state array to check if a player has been chosen
// i'll need to set each item in the array to false 
// there are playersArr.length number of players

const [playerChosen,setPlayerChosen] = useState([]);


  
  return (
    <div>
      {playerArr.map(player => {
        return (
          // here i want to render a list of players who
          // have not yet been chosen
          <p>{player.position}: {player.name}, {player.nationality}</p>
      
        );
      })}
    </div>
  )


};

export default PlayerList;
