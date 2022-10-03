let output = document.querySelector('#out')
let num1 = 0
let num2 = 0
let whatSim = ''




document.querySelectorAll('.num').forEach(item => {
    item.addEventListener('click', function() {
        if (whatSim === '=') {
            output.innerHTML = ''
        }
        output.innerHTML += item.textContent
    })
})

document.querySelectorAll('.sim').forEach(item => {
    item.addEventListener('click', function() {
        let sim = item.textContent 
        
        letCalc(sim)
    })
})

function letCalc (SIM) {    
    if (SIM === 'C') {
        output.innerHTML = ''
    }
    else if (SIM === '+') {
        num1 = document.querySelector('#out').textContent
        output.innerHTML = ''
        whatSim += '+'              
    }
    else if (SIM === '-') {
        num1 = document.querySelector('#out').textContent
        output.innerHTML = ''
        whatSim = '-'       
    }
    else if (SIM === '*') {
        num1 = document.querySelector('#out').textContent
        output.innerHTML = ''
        whatSim = '*'       
    }
    else if (SIM === '/') {
        num1 = document.querySelector('#out').textContent
        output.innerHTML = ''
        whatSim = '/'       
    }
    else if (SIM === '=') {
        
        LetGo(whatSim)             
    }
}

function LetGo(Sim) {
    num2 = document.querySelector('#out').textContent
    if (Sim === '+') {
        output.innerHTML = Number(num1) + Number(num2)
    }
    if (Sim === '-') {
        output.innerHTML = Number(num1) - Number(num2)
    }
    if (Sim === '*') {
        output.innerHTML = Number(num1) * Number(num2)
    }
    if (Sim === '/') {
        output.innerHTML = Number(num1) / Number(num2)
    }
    whatSim = '='
}


