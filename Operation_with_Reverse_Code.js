let convertToReverseCode = (prop) => {
    let result = binary(prop);
    for (let element = 1; element < result.length; element++)
        result[element] === '1' ? result[element] = '0' : result[element] = '1';
    return result;
}

let ReverseAddition = (prop) => {
    let argument = structuredClone(prop);
    if (argument.X1 < 0) {
        argument.X1 = convertToReverseCode(argument.X1++)
        argument.X2 = binary(argument.X2)
        let result = addition(argument);
        for (let element in result)
            if (element !== 0)
                result[element] === '1' ? result[element] = '0' : result[element] = '1';
        return result;
    } else if (argument.X2 < 0) {
        argument.X2 = convertToReverseCode(argument.X2)
        argument.X1 = binary(argument.X1)
        console.log(parseInt(toStr(argument.X2),2))
        let result = addition(argument);
        return result;
    } else {
        argument.X1 = binary(argument.X1)
        argument.X2 = binary(argument.X2)
        return addition(argument);
    }
}