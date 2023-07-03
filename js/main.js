import { Modal }  from './modal.js'
import { alertError } from './alert-error.js'
import { notNumber, calculateIMC } from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrheightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrheightIsNotANumber){
        alertError.open()
        resetInputsValues()
        return;
    }

    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)

    resetInputsValues()
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}

const resetInputsValues = () => {
    inputHeight.value = ""
    inputWeight.value = ""
}

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()