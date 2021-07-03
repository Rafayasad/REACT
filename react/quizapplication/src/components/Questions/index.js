import { useEffect, useState } from "react";

function Questions (props) {

    const [allOptions,setAllOptions] = useState([])
    //Destructure
    const {data : {question , incorrect_answers , correct_answer} , currentquestion , updatedValue} = props;

        useEffect (()=>{
            incorrect_answers.push(correct_answer);
            setAllOptions(shuffle(incorrect_answers));
        },[currentquestion])
    
    return (
        <div>
           <h1>Question {currentquestion}</h1> 
           <h2>{question}</h2>
           {allOptions.map((v,i)=>{
               return <div>
                   <input type='radio' name='allOptions' key={v} value={v} onChange={(e)=>updatedValue(e.target.value)}/>{v}
               </div>
           })}

        </div>
    )
}

export default Questions;

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
































































// function Question (props) {
//     const [val,setVal] = useState ();
//     const [score,setScore] = useState (0);
    
//     const inputVal = (e) =>{
//         setVal(e.target.value);
//         if(e.target.value === props.correctAnswer){
//             setScore(score+1);
//             props.getScore(score+1);
            
//         }
//         else{
//             setScore(score+0);
//         }
    
//     }

//     return (
//         <div>
//             <div>
//                 <p>{props.question}</p>
//             </div>

//             <div>
//                 <input type='radio' name='action' value={props.incorrectAnswers || props.correctAnswer} onChange={inputVal} onClick={props.getScore}/>
//                 {props.incorrectAnswers}
//                 {props.correctAnswer}
//             </div>

//         </div>
//         )
//     }
    
//     export default Question;