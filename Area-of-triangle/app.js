const calculateBtn=document.querySelector("#calculate-btn");
const outputDiv=document.querySelector("#output");
const firstInput=document.querySelector("#a");
const secondInput=document.querySelector("#b");
const thirdInput=document.querySelector("#c");

calculateBtn.addEventListener('click',calculateArea);

function calculateArea(){
    const semiPerimeter=(Number(firstInput.value)+Number(secondInput.value)+Number(thirdInput.value))/2
    calculateABC(semiPerimeter)
    }

function calculateABC(semiPerimeter){
    const areaOfA=semiPerimeter-Number(firstInput.value)
    const areaOfB=semiPerimeter-Number(secondInput.value)
    const areaOfC=semiPerimeter-Number(thirdInput.value)
    const area=semiPerimeter*areaOfA*areaOfB*areaOfC;
    squareRoute(area);
}
function squareRoute(area){
   const finalArea=Math.sqrt(area);
   if(Number(firstInput.value)=="" || Number(secondInput.value)=="" || Number(thirdInput.value)==""){
    outputDiv.innerText="Please fill all the fields"
   }else{

       outputDiv.innerText="Area= " + finalArea;
   }
}