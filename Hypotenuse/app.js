const inputNumber=document.querySelectorAll(".input-number");
const submitBtn=document.querySelector("#submit-btn");
const outputDiv=document.querySelector("#output");
submitBtn.addEventListener('click',calculateResult);

function calculateResult(){
    let squareNumberOne=Math.pow(Number((inputNumber[0].value)),2)
    let squareNumberTwo=Math.pow(Number((inputNumber[1].value)),2)
    sumOfNumber(squareNumberOne,squareNumberTwo);
}
    function sumOfNumber(squareNumberOne,squareNumberTwo){
        const sum=squareNumberOne+squareNumberTwo;
        squareRoute(sum);
    }
    function squareRoute(sum){
        const squareOfNumber=Math.sqrt(sum);
        if(Number((inputNumber[0].value))=="" || Number((inputNumber[1].value))==""){
            outputDiv.innerText="Please fill all the fields";
        }else{

            outputDiv.innerText="Length of Hypotanuse(c)= "+squareOfNumber;
        }
    }
    