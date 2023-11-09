function calcFunction(event){
    console.log(event)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + event
}

function calcSymbol(event){
    if (event === 1)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + '+'
    else if (event === 2)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + '-'
    else if (event === 3)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + '.'
    else if (event === 4)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + '/'
    else if (event === 5)
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + '*'
}

function evalFunction(event){
    if(event === 1)
    {
        let result = eval(document.getElementById("screen").innerHTML)
        document.getElementById("screen").innerHTML = result
    }
    else if(event === 2)
    {
        document.getElementById("screen").innerHTML = ''
    }
}