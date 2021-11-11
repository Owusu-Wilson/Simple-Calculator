
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){}

    appendNumber(number){
        if (number === "." && this.currentOperand.includes(".")){
            return 
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === "") {
            return
        }
        if(this.previousOperand !== ''){
            this.compute()
        }
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)){return}
        switch (this.operation) {
            case "+":
                computation = prev + current
                break;
            
            case "-":
                computation = prev - current
                break;
            
            case "*":
                computation = prev * current
                break;
            
            case "÷":
                computation = prev / current
                break;
            
            default:
                return
                
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }


}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// ======================================================================
const calc = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
        
        
    })
})

equalsButton.addEventListener('click', button =>{
    calc.compute()
    calc.updateDisplay()
})
allClearButton.addEventListener('click', button =>{
    calc.clear()
    calc.updateDisplay()
})

