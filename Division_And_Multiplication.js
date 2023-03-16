let division = (prop) => {
let argument = structuredClone(prop);
    // if(argument.X1[0] === '1'){
    //     argument.X1[0] = '0'
    // }else if(argument.X2[0] === '1'){
    //     argument.X2[0] = '0'
    // }
    let result = 0
    while(Math.abs(argument.X1) >= Math.abs(argument.X2)){
        argument.X1 = ReverseAddition({X1: argument.X1, X2: -1*argument.X2 })
        argument.X1 = Number(parseInt(toStr(argument.X1),2))
        result++
    }
    if(prop.X1[0] === '1' || prop.X2[0] === '1')
        return result * (-1);
    return result;
}

let multiplication = (prop) => {
    let result = ['0', '0', '0', '0', '0', '0', '0', '0'], argument = Object.assign({},prop), check = false;
    if(argument.X1[0] == '1'){
        argument.X1[0] = '0'
        check = true
    }else if(argument.X2[0] == '1'){
        argument.X2[0] = '0'
        check = true
    }
    argument.X2 = beShort(argument.X2)
    argument.X1 = beShort(argument.X1)
    for (let i = argument.X2.length - 1; i >= 0; i--) {
        let result2 = []
        for (let j = argument.X1.length - 1; j >= 0; j--) {
            if (argument.X2[i] !== '0') {
                argument.X1[j] === '1' ? result2.unshift('1') : result2.unshift('0');
            }
        }
        for (let k = argument.X2.length - 1; k > i; k--)
            result2.push('0')
        while (result2.length < 8)
            result2.unshift('0')
        result = addition({
            X1: result2,
            X2: result
        })
    }
    if(check)
        result.unshift('-')
            
    return result;
}