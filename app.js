const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-number");
const displayMessage= document.querySelector("#display");

checkNumberButton.addEventListener("click",checkBirthDateIsLucky);

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum % luckyNumber.value===0){
        displayMessage.innerText = "yaaa!! your Birthday is lucky 😀";
    }else{

        displayMessage.innerText = "Your Birthday is not Lucky 😔";
    }
}


function calculateSum(dob){
    
    let sum=0;
    for(let i=0;i<dob.length;i++){
        if(dob.charAt(i)>='0' && dob.charAt(i)<='9')
                sum+=Number(dob.charAt(i));
    }

    return sum;
}