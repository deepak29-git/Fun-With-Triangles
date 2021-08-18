const formQuiz=document.querySelector("#form-quiz");
const submitBtn=document.querySelector("#submit-btn");
const ouputDiv=document.querySelector("#output");

submitBtn.addEventListener('click', submitQuiz);

const quizAnswer=["28°","equal measures","60, 60, 60","2","Equilateral","Two sides are equal","base","60","isosceles","vertex angle"];
function submitQuiz(){
    let score=0;
    let index=0;
    const getData= new FormData(formQuiz);
    ouputDiv.style.display="none"
    for (let value of getData.values()) {
        if(value===quizAnswer[index]) {
            score=score+1;
            
        }
        ouputDiv.style.display="block"
        index=index+1;
    }  
    
    ouputDiv.innerText="Your score is "+ score;    
}
          

    