const question = [
    {
     'que': "which of  following markup lanuage ?",
      'a' : "HTML",
      'b' : "css",
      'c' : "javascript",
      'd' : "PHP",
      'correct' : 'a'
    },
    {
     'que': "On which year javascript launched ?",
      'a' : "1993",
      'b' : "1995",
      'c' : "1994",
      'd' : "None of the above ",
      'correct' : 'b'
    },
    {
     'que': "what dose css stand for ?",
      'a' : "Hypertext markup launagae",
      'b' : "cascading Style Sheet",
      'c' : "javascript",
      'd' : "PHP",
      'correct' : 'b'
    },
    {
      'que': "what dose css stand for ?",
       'a' : "Hypertext markup launagae",
       'b' : "cascading Style Sheet",
       'c' : "javascript",
       'd' : "PHP",
       'correct' : 'b'
     }

]


let index = 0;
let total = question.length;
let right = 0;
    wrong = 0;
    notanswered=0;

const Qstn = document.getElementById("qusbox")
const optionInput =document.querySelectorAll('.optn');


function LodeQstn(){
    if(index==total){
      return endquz(); 
    } 
   reset();
   const data = question [index]
   Qstn.innerText = `${index+1}) ${data.que}`;
   optionInput[0].nextElementSibling.innerText=data.a;
   optionInput[1].nextElementSibling.innerText=data.b;  
   optionInput[2].nextElementSibling.innerText=data.c; 
   optionInput[3].nextElementSibling.innerText=data.d; 
  
}

const onSubmit=()=>{
  const data = question [index]
    const ans = getAnswer()
    if (ans == data.correct) {
      right++;
    } else if (ans) {
     wrong++;
    } else {
      notanswered++;
    }
    index++;
    LodeQstn();
    return;
}

const getAnswer=()=>{
  let answer;
    optionInput.forEach(
      (input)=>{
        if(input.checked){
         answer=input.value;
        }
      }
    )
    return answer;
}
const reset=()=>{
  optionInput.forEach(
    (input)=>{
     input.checked=false;
  }
 )
}

const endquz =()=>{
  document.getElementById("box").innerHTML=`
  <div>
    <h3 style="color:white">Thank you for playing Quiz</h3>
    <div style="text-align:center"> 
     <h2>${right} / ${total} are currect .</h2><br>
     <h2>${notanswered} not answered</h2><br>
     <h2>${wrong} wrong answer</h2>
  </div>
  </div>
  `
}

LodeQstn();

