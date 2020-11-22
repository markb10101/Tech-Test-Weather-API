import React, {useState} from "react";
import styles from "./PlayerList.module.scss";
import playerArr from "../../data/footballers";


const PlayerList = () => {

// i'll need to add another bit of data to the playersArr to 
// store whether the players are chosen or not

// const addPlayerChosenData = () => {
//   playerArr.map(...playerArr =>{
//     player.chosen: false;
//   })
// }


const handleChoosePlayer = (player) => {
 console.log("player chosen");
}
  
  return (
    <div className={styles.playerList}>

      {playerArr.map(player => {
        return (
          // here i want to render a list of players who
          // have not yet been chosen
          <div onClick={handleChoosePlayer(player)} className={styles.player}>{player.position}: {player.name}</div>
      
        );
      })}
    </div>
  )


};

export default PlayerList;
