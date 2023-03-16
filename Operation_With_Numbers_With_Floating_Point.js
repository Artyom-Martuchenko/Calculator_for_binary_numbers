let convertToCodeWithFloatingPoint = (prop) => {
    let direct = binary(prop);
    let exponenta = direct.length - 1 + 127;
    exponenta = binary(exponenta);
    let result = [];
    prop > 0 ? result.push('0') : result.push('1')
    for (let element in exponenta)
        result.push(exponenta[element])
    for (let element = 0; element < direct.length; element++)
        result.push(direct[element])
    while (result.length < 32)
        result.push('0')
    return result;
}

let AdditionOfNumbersWithFloatingPoint = (prop) => {
    let X1 = convertToCodeWithFloatingPoint(prop.X1);
    let X2 = convertToCodeWithFloatingPoint(prop.X2);
    let x = [], x2 = [];
    for (let j = 16; j != 8; j--) {
        x.unshift(X1[j])
        x2.unshift(X2[j])
    }
    return addition({
        X1: x,
        X2: x2
    })
}