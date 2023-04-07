// const {binary,addition,specialaddition,subtraction,beShort,toStr } = require('./support');

let additionalAddition = (prop) => {
    let variables = structuredClone(prop)
    if (variables.X1 < 0)
        return addition({
            X1: convertToAdditionalCode(variables.X1++),
            X2: binary(variables.X2)
        })
    else
        return addition({
            X1: binary(variables.X1),
            X2: convertToAdditionalCode(variables.X2++)
        })
}

let convertToAdditionalCode = (prop) => {
    let result = {
        X2: ['0', '0', '0', '0', '0', '0', '0', '1']
    };
    result.X1 = convertToReverseCode(prop);
    result = addition(result);
    return result;
}