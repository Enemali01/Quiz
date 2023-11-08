const questions = [
  {
    'que': 'Which of this is a Markup Language',
    'a': 'HTML',
    'b': 'JAVA',
    'c': 'C++',
    'd': 'Javascript',
    'correct': 'a'
  },
  {
    'que': 'Which is Largest desert in the world',
    'a': 'Antarctica',
    'b': 'Gabi',
    'c': 'Kalahari',
    'd': 'Sahara',
    'correct': 'a'
  },
  {
    'que': 'Who is the developer',
    'a': 'None of the Above',
    'b': 'John',
    'c': 'Samuel',
    'd': 'Simon',
    'correct': 'd'
  },
  {
    'que': 'What is his Major',
    'a': 'Backend',
    'b': 'DevOps',
    'c': 'FrontEnd',
    'd': 'Designer',
    'correct': 'c'
  }

]
let index = 0;
let total = questions.length;
let right = 0; wrong = 0;
const quesBox = document.getElementById('questionBox');
const optInp = document.querySelectorAll('.options');
// const nextBtn = document.getElementById('btn');

const loadQuestion = () => {
  if(index == total){
    return endQuiz();
  }
  reset();

  //display question and answers
  const data = questions[index]
  quesBox.innerText =`${index + 1}. ${data.que}`;
  optInp[0].nextElementSibling.innerHTML = data.a;
  optInp[1].nextElementSibling.innerHTML = data.b;
  optInp[2].nextElementSibling.innerHTML = data.c;
  optInp[3].nextElementSibling.innerHTML = data.d;
}

const submitQuiz = () => {
  const data = questions[index]
  const ans = getAnswer()
  // console.log(ans, data.correct);
  if(ans == data.correct){
      right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () =>{
  let answer ;
  optInp.forEach(
    (input) => {
      if(input.checked){
        answer = input.value; 
      }
    }

  )
  return answer;
}

//Reset the radio buttons

const reset = () => {
  optInp.forEach((input) => {
      input.checked = false;
  })
}

//End of quiz and display result
const endQuiz = () => {
   document.getElementById('display').innerHTML = `
    <div style="text-align: center">
    <h2>Thank you so much</h2>
     <p>${right} / ${total} are correct</p>
     </div>
   `
}

// function endQuiz(){
//   const displayResult = document.getElementById('display');
//   displayResult.innerHTML = ``
// }

loadQuestion();
// function loadQuestion(){
//   const data = questions[index];
//   quesBox.innerText = `${data.que}`;
//   optInp[0].nextElementSibling.innerHTML = data.a;
// }
