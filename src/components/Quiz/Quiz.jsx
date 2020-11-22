import React, {useState, useEffect} from "react";
import styles from "./Quiz.module.scss";

const Quiz = () => {

  const [userAnswer,setUserAnswer] = useState("");
  const [reply, setReply] = useState("Waiting for your answer...");
  const correctAnswer = "whippet";


  const validateForm = (e) => {
    e.preventDefault();
    console.log("here");
    
    userAnswer.toLowerCase()==correctAnswer ? 
      setReply("Yes, Whippet's are best!")
      :
      setReply("No, that's wrong I'm afraid.")
    
  }

  useEffect(()=>{

  },[reply])


  return (
    <div className={styles.quiz}>
      <form onSubmit={e => validateForm(e)}>
        <label htmlFor="answer">
          What's the best dog?
        <input autocomplete="off" name="answer" placeholder="your answer" type="text" onChange={e => setUserAnswer(e.target.value)} required/>
        </label>
        <input type="submit" value="submit" onSubmit={e=>validateForm(e)}/>
      </form>
      <div className={styles.reply}>{reply}</div>
    </div>
  );
};

export default Quiz;
