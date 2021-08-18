const triAngle = document.querySelectorAll(".angle");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

checkBtn.addEventListener('click', checkOuput);

function sumOfAngle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function checkOuput() {
    const sum = sumOfAngle(Number(triAngle[0].value), Number(triAngle[1].value), Number(triAngle[2].value))
    if(Number(triAngle[0].value)==""){
        outputDiv.innerText="Please fill all the input fields"
        return false;
    }
    if(Number(triAngle[1].value)==""){
        outputDiv.innerText="Please fill all the input fields"
        return false;
    }
    if(Number(triAngle[2].value)==""){
        outputDiv.innerText="Please fill all the input fields"
        return false;
    }
    if (sum === 180) {
        
        outputDiv.innerText = "Great! You are making a Triangle";
    } else {
        outputDiv.innerText = "Oops! You are not making a Triangle";
    }
}