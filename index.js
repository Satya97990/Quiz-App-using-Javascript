console.log("\n Please select any options by typing either a/b/c/d \n");
let readlinesync=require("readline-sync");
let kuler=require("kuler");
//Basically kuler is a module which allows us to add colour to our code
let score=0;
let userName=readlinesync.question("What's your name ?");
console.log(kuler(`Hello ${userName}, Welcome to Quizify`,"#ea580c"));
const database={
  data:[
   
    
  {
      
      question:`let a={},b={}
      console.log(a==b)  console.log(a===b)`,
      options:{
        a:'false false',
        b:`false true`,
        c:`true false`,
        d:'true true'
        
      },
      correctanswer:`a`
    },
    {
      question:`Object.assign(target,source) creates which type of copy?`,
      options:{
        a:`deep copy`,
        b:`shallow copy`,
        c:`nested copy`,
        d:`Creates a new reference`
      },
      correctanswer:'b'
    },
    {
      question:`Is method chaining possible for forEach,map,filter,reduce`,
      options:{
        a:`Yes`,
        b:`No`
      },
      correctanswer:'b'
      
    },
    {
      question:`Which of the languages have Object Oriented Programming concepts?`,
      options:{
        a:`C language`,
        b:`C++ language`,
        c:`Java language`,
        d:`Cascading Style Scheme`
      },
      correctanswer:'b c'
      
      
    }
 
    ]
}
//Creating LeaderBoard
const leaderBoard={
  data:[
    {
      name:"Raunak",
      score:3
    },
    {
      name:"Shyam",
      score:2
    },
    {
    name:"Mangal",
    score:3
    }
    
  ]
}

//Main Logic Starts from here
function playgame(useranswer,correctanswer)
{
  if(useranswer==correctanswer)
  {
    console.log(kuler("Correct Answer \n","#15803d"));
    score++;
  }
  else
  {
    console.log(kuler("Incorrect Answer \n","#b91c1c"));
  }
  console.log(kuler(`Correct answer is ${correctanswer}`,"#15803d"))
  
}
//Function to show questions and answers
function showQuestionsAndOptions(database)
{
  for(let i=0;i<database.data.length;i++)
    {
      console.log(`Q${i+1}- ${database.data[i].question} \n`);
      for(let key in database.data[i].options)
        {
          console.log(`${key} : ${database.data[i].options[key]}\n`)
        }
       let useranswer = readlinesync.question("Enter your answer - (a/b/c/d)");
      useranswer=useranswer.toLowerCase();
      playgame(useranswer,database.data[i].correctanswer);
    }
 

  
}
function showhighScorer(leaderBoard)
{
  leaderBoard.data.push({name:userName,score:score});
  let sortedScoreList=leaderBoard.data.sort((a,b)=> b.score - a.score);
  console.log(kuler(`\nCheck your position on the Leader Board 🎉🎉\n`,"#f59e0b"));
  for(let leader of sortedScoreList)
    {
      if(leader.name=="satya")
      {
         console.log(kuler(`${leader.name} - Score:${leader.score}`,"#06b6d4"));
      }
      else
        console.log(kuler(`${leader.name} - Score:${leader.score}`,"#7e22ce"));
    }
}

 
showQuestionsAndOptions(database);
console.log(kuler(`Your score is- ${score}`,"#0284c7"));
showhighScorer(leaderBoard);

