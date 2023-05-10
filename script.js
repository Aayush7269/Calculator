
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
const equals = document.querySelector('.equalsto')
console.log(buttons)
let calculation = []
let newcalculation

function calculate(button){

    const answer = newcalculation
    const value = button.textContent
    if(value === "C"){
        calculation=[]
        screenDisplay.textContent = ''

        // console.log(calculation)
    }
    else if( value === "="){
       screenDisplay.textContent = eval(newcalculation)  
       console.log(screenDisplay.textContent)
    }
    //  if( answer === "22"){
    //     return  newcalculation="wrong answer"
    //     // console.log(screenDisplay.textContent)
    // }

    else{
        screenDisplay.textContent = '.'
        calculation.push(value)
        newcalculation = calculation.join('')
        screenDisplay.textContent = newcalculation
        console.log(newcalculation)
    }
    


    
   
}
buttons.forEach(button => button.addEventListener('click',()=> calculate(button)))

