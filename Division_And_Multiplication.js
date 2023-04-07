let division = (prop) => {
    let argument = structuredClone(prop);
    let result = 0
    while (Math.abs(argument.X1) >= Math.abs(argument.X2)) {
        argument.X1 = reverseAddition({ X1: argument.X1, X2: -1 * argument.X2 })
        argument.X1 = Number(parseInt(toStr(argument.X1), 2))
        result = result + 1
    }
    result++
    if (prop.X1[0] === '1' || prop.X2[0] === '1')
        return result * (-1);
    return result;
}

let multiplication = (prop) => {
    let output = ['0', '0', '0', '0', '0', '0', '0', '0']
    let argument = Object.assign({}, prop)
    let check = false

    if (argument.X1[0] == '1') {
        argument.X1[0] = '0'
        check = true
    } else if (argument.X2[0] == '1') {
        argument.X2[0] = '0'
        check = true
    }
    argument.X2 = beShort(argument.X2)
    argument.X1 = beShort(argument.X1)
    for (let i = argument.X2.length - 1; i >= 0; i--) {
        let sum_buffer = []
        for (let j = argument.X1.length - 1; j >= 0; j--) {
            if (argument.X2[i] !== '0') {
                argument.X1[j] === '1' ? sum_buffer.unshift('1') : sum_buffer.unshift('0');
            }
        }
        for (let k = argument.X2.length - 1; k > i; k--)
            sum_buffer.push('0')
        while (sum_buffer.length < 8)
            sum_buffer.unshift('0')
        output = addition({
            X1: sum_buffer,
            X2: output
        })
    }
    if (check)
        output.unshift('-')

    return output;
}