
let exponentSize = 8
let exponentBias = 127
let mantisSize = 23
let titleSize = 32

let convertToCodeWithFloatingPoint = (prop) => {
    let out = exponentBias
    
    if(prop == 0)
        return 0
    
    while(prop >= 2){
        prop /= 2
        out++
    }
    while(prop < 1){
        prop *= 2
        out--
    }
    
    out = binary(out)
    out = out.reverse()

    out.push('0')
    while(out.length <= (mantisSize + exponentSize)){
        out.unshift('0')
    }

    prop -= 1

    for(let counter = 0; counter < mantisSize; counter++){
        if((2**(-1*counter - 1))<= prop){
            prop -= (2**(-1*counter - 1))
            out[mantisSize - 1 - counter] = '1'
        }
    }
    return out   
}

let additionOfNumbersWithFloatingPoint = () => {
    let X1 = Number(prompt('Enter first number: '))
    let X2 = Number(prompt('Enter second number: '))
    X1 = convertToCodeWithFloatingPoint(X1)
    X2 = convertToCodeWithFloatingPoint(X2)
    X2 = toStr(X2)
    X1 = toStr(X1)
    let bias_x2 = X2.slice(mantisSize,titleSize - 1)
    let bias_x1 = X1.slice(mantisSize,titleSize - 1)
    let bias = parseInt(toStr(bias_x2.split('').reverse()),2) - parseInt(toStr(bias_x1.split('').reverse()),2)

    
    let mantis_x1 = toStr(X1).slice(0, mantisSize)
    let mantis_x2 = toStr(X2).slice(0, mantisSize)
    mantis_x1 = mantis_x1.split('')
    mantis_x2 = mantis_x2.split('')
    while(mantis_x1.length < 32){
        mantis_x1.push('0')
        mantis_x2.push('0')
    }
    mantis_x1[mantisSize]='1'
    mantis_x2[mantisSize]='1'
    let exponent
    if(bias > 0){
        exponent = toStr(X2).slice(mantisSize,titleSize).split('')
        while(exponent.length < titleSize)
            exponent.unshift('0')
        let counter = 0
        while(counter < bias){
            mantis_x1.shift()
            mantis_x1.push('0')
            counter++
        }
    }else if(bias < 0){
        bias = Math.abs(bias)
        exponent = toStr(X1).slice(mantisSize,titleSize).split('')
        while(exponent.length < titleSize)
            exponent.unshift('0')
        let counter = 0
        while(counter < bias){
            mantis_x2.shift()
            mantis_x2.push('0')
            counter++
        }
    }else{
        exponent = toStr(X1).slice(mantisSize,titleSize).split('')
        while(exponent.length < titleSize)
            exponent.unshift('0')
    }
    
    let output = Addition({X1: mantis_x1, X2: mantis_x2})
    if (output[mantisSize + 1] === '1'){
        output.shift()
        output.push('0')
        let add = []
        while(add.length < titleSize)
            add.push('0')
        add[mantisSize] = '1'
        exponent = Addition({X1: exponent, X2: add}) 
    }
    output[mantisSize] = '0'
    
    output = Addition({X1: exponent.reverse(), X2: output.reverse()}).reverse()
    output = toStr(output)
    alert(`Amount of |${X1}| and |${X2}|: ${output} or ${decimal(output)}`)
    return output;
}

function decimal(value){
    let output = 1
    let exponent = parseInt(toStr(value.slice(mantisSize, titleSize - 1).split('').reverse()),2) - exponentBias 
    
    exponent = 2**(exponent)
    for(let i = 0; i < mantisSize; i++){
        if(value[i] === '1')
            output += 2**(i - mantisSize)
    }
            
    output = output * exponent
    return output
}