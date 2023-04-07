console.log((129).toString(2))
let argument = new Object;
let value1 = Number(prompt("Please write the first value:", 9));
let value2 = Number(prompt("Please write the second value:", 21));
if (Math.abs(value1) > Math.abs(value2)) {
    argument.X1 = value1;
    argument.X2 = value2;
} else {
    argument.X1 = value2;
    argument.X2 = value1;
}
let update = new Object;
let forRef = -1 * argument.X1
update.X1 = binary(argument.X1);
update.X2 = binary(argument.X2);
let cycle = true
while (cycle) {
    let action = Number(prompt("Please choose the action:\n 1)Execute arithmetic action\n 2)Execute multiplication of two numbers\n 3)Execute addition of two numbers with floating point\n 4)Division\n 5)Exit"))
    switch (action) {
        case 1:
            let amount = addition(update);
            let difference = specialaddition({
                X1: binary(-1 * value1),
                X2: binary(-1 * value2)
            })
            console.log(amount);
            alert(`Amount of ${value1} and ${value2}: ${amount} or ${parseInt(toStr(amount), 2)}\nAmount of ${-1 * value1} and ${value2} by Reverse code: ${ReverseAddition({ ...argument, X1: (-1 * argument.X1) })} or ${-1 * Number(parseInt(toStr(ReverseAddition({ ...argument, X1: forRef })), 2))}\nAmount of ${value1} and ${-1 * value2} by Additional code: ${additionalAddition({ X1: value1, X2: (-1 * value2) })} or ${parseInt(toStr(additionalAddition({ X1: value1, X2: (-1 * value2) })), 2)}\n Amount of ${-1 * value1} and ${-1 * value2} by Direct code: ${difference} or ${parseInt(toStr(difference), 2)}`);
            break;
        case 2:
            let assurance = structuredClone(update)
            let result = toStr(multiplication(assurance))
            alert(`Multiplication of |${value1}| and |${value2}|: ${result} or ${parseInt(result, 2)}`);
            break;
        case 3:
            console.log(3.5 + 0.05)
            additionOfNumbersWithFloatingPoint(argument)
            break;
        case 4:
            alert(`Division of ${argument.X1} and ${argument.X2}: ${division(argument)}`)
        case 5:
            cycle = false;
    }
}
