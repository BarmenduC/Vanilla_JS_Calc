const OutputView = document.querySelector("#screen")
const reset = document.querySelector(".resetButton")
const answer = document.querySelector(".equalButton")
const delkey = document.querySelector(".delButton")

const calcbutton = document.querySelectorAll(".calcButton")

const buttonArray = Array.from(calcbutton)

let lastKeyIsOperator = false
let decimalAdded = false



const buttonHandler = (event) => {
    console.log("keyClicked: ", event.target.innerText);
    const buttonValue = event.target.innerText

    if (buttonValue === '.' && decimalAdded)
        return

    if ('+-x/'.includes(buttonValue)) {
        if (lastKeyIsOperator) {
            initalValue = OutputView.value
            updatedValue = initalValue.substring(0, initalValue.length - 1) + value
            console.log(updatedValue)
            OutputView.value = updatedValue
            return
        }
        lastKeyIsOperator = true; 
        decimalAdded = false; 
    } else {
        
        lastKeyIsOperator = false; 

        if (buttonValue === ".") {
            decimalAdded = true;
        }
    }

    OutputView.value += buttonValue
    OutputView.scrollLeft = OutputView.scrollWidth
    console.log(OutputView)

}

const resetHandler = () => {
    console.log("Reset Clicked");
    OutputView.value = "";
  };

  const deleteHandler = () => {
    console.log("Delete Clicked");
    initalValue = OutputView.value;
    updatedValue = initalValue.substring(0, initalValue.length - 1);
    OutputView.value = updatedValue;
  };

  const expressionHandler = (expression) => {
    console.log("Inside expression handler");
  
    const formattedExpression = expression.replace(/x/g, "*");

    const result = eval(formattedExpression);
  
    return result;
  };

  const answerHandler = () => {
    console.log("answerClicked");
  
    const expression = OutputView.value;
    const result = expressionHandler(expression);
    OutputView.value = result;
  };


// console.log(buttonArray)




buttonArray.forEach((key) => key.addEventListener("click", buttonHandler))
reset.addEventListener("click",resetHandler)
answer.addEventListener("click",answerHandler)
delkey.addEventListener("click",deleteHandler)