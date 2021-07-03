// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Question from './components/Questions';
import './App.css';

function App() {
  const [currentquestion,setcurrentquestion] = useState (0);
  const [showScoreScreen,setshowScoreScreen] = useState(false);
  const [getUpdatedValue,setGetUpdatedValue] =useState();
  const [score,setScore] = useState(0);
  const [retry,setRetry] = useState();

  const questions = [{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"Who created the digital distribution platform Steam?",correct_answer:"Valve",incorrect_answers:["Pixeltail Games","Ubisoft","Electronic Arts"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"Who is the main character in &quot;The Stanley Parable&quot;?",correct_answer:"Stanley",incorrect_answers:["The Adventure Line","The Narrator","The Boss"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"In the 2002 video game &quot;Kingdom Hearts&quot;, how many Keyblades are usable?",correct_answer:"18",incorrect_answers:["13","16","15"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"Which of these is NOT the name of a rival gang in the video game Saint&#039;s Row 2?",correct_answer:"The Zin Empire",incorrect_answers:["The Brotherhood","The Ronin","The Sons of Samedi"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"Who is the creator of the Super Smash Bros. Series?",correct_answer:"Masahiro Sakurai",incorrect_answers:["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"TF2: What code does Soldier put into the door keypad in &quot;Meet the Spy&quot;?",correct_answer:"1111",incorrect_answers:["1432","1337","No code"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"In the Half-Life series, Gordon Freeman&#039;s signature weapon is a:",correct_answer:"Crowbar",incorrect_answers:["Sledgehammer","Fiber Wire","Katana"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"In Minecraft, which two items must be combined to craft a torch?",correct_answer:"Stick and Coal",incorrect_answers:["Stick and Fire","Wood and Coal","Wood and Fire"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?",correct_answer:"Donkey Kong",incorrect_answers:["Mario","Kirby","Zelda"]}
    ,{category:"Entertainment: Video Games",type:"multiple",difficulty:"easy",question:"In the &quot;Metal Gear Solid&quot; series, what&#039;s the name of Solid Snake&#039;s brother?",correct_answer:"Liquid Snake",incorrect_answers:["Kulus Snake","Billy Snake","Gilur Snake"]}
    ]

    const nextQuestion = () =>{
        const nextQuestion = currentquestion + 1;
        const correctAnswer = questions[currentquestion].correct_answer;
        setScore(correctAnswer === getUpdatedValue ? score+1 : score);
        if(nextQuestion < questions.length){
          setcurrentquestion(nextQuestion);
        }
        else{
          setshowScoreScreen(true);
        }
    } 
    // i take all options value from this function
    const updatedValue = (getValue) =>{
      setGetUpdatedValue(getValue);
    } 

  return (
    <div className="App">
      <header className="App-header">
      {showScoreScreen ?

      (
        <div>
          <h1>you got {score} out of {questions.length}</h1>
        </div>
      )

      :

      (
        <div>
          <Question data={questions[currentquestion]} currentquestion={currentquestion+1} updatedValue={updatedValue}/>
          <br />
          <div>
          {currentquestion === questions.length-1 ? 
          <button onClick={nextQuestion}>Submit</button>
          :
          <button onClick={nextQuestion}>Next</button>
        }
          </div>
      </div>
      )}
        
        </header>
    </div>
  );
}

export default App;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          {/* {showScore ? (

            <div> you got {score} out of {questions.length}</div>
          ) 
          :
          (
      <div>
            <div>
          <h1>Question {currentquestion+1}</h1>
          <Question question={questions[currentquestion].question} />
            </div>

            <div>
          {questions[currentquestion].incorrect_answers.map((v,i)=>{
            return <Question incorrectAnswers={v} />
          })}
           <Question correctAnswer={questions[currentquestion].correct_answer} getScore={getScore}/>
            </div>

          <br />
            <div>  
              {currentquestion >= questions.length-1 ?
          <button onClick={nextQuestion}>Submit</button>
          :
          <button onClick={nextQuestion}>Next</button>
              }
              </div>
      </div>
          )} */}
      {/* </header>
    </div>
  );
}

export default App; */}
