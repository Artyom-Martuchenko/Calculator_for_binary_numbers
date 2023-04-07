let binary = (prop) => {

    prop = prop.toString(2);
    let arr = new Array;

    for (let element in prop)
        prop[element] == '-' ? delete prop[element] : arr.push(prop[element]);
    for (; arr.length < 8;)
        arr.unshift('0');

    return arr;
}

let addition = (prop) => {
    let result = [];
    prop.X1[0] === '1' || prop.X2[0] === '1'? result[0] = '1' : result[0] = '0';
    let next = false;
    for (let i = prop.X1.length - 1; i > 0; i--) {
        if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == false) {
            result[i] = '0'
            next = true
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '1' && next == false) || (prop.X1[i] === '1' && prop.X2[i] === '0' && next == false)) {
            result[i] = '1'
        } else if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == true) {
            result[i] = '1'
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '0' && next == true)) {
            result[i] = '1'
            next = false
        } else if ((prop.X1[i] === '1' && prop.X2[i] === '0' && next == true) || (prop.X1[i] === '0' && prop.X2[i] === '1' && next == true)) {
            result[i] = '0'
        } else if (prop.X1[i] === '0' && prop.X2[i] === '0' && next == false) {
            result[i] = '0'
        }
    }
    return result;
}

let specialaddition = (prop) => {
    let result = [];
    prop.X1[0] === '0' ? result[0] = '0' : result[0] = '1';
    let next = false;
    for (let i = prop.X1.length - 1; i > 0; i--) {
        if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == false) {
            result[i] = '0'
            next = true
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '1' && next == false) || (prop.X1[i] === '1' && prop.X2[i] === '0' && next == false)) {
            result[i] = '1'
        } else if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == true) {
            result[i] = '1'
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '0' && next == true)) {
            result[i] = '1'
            next = false
        } else if ((prop.X1[i] === '1' && prop.X2[i] === '0' && next == true) || (prop.X1[i] === '0' && prop.X2[i] === '1' && next == true)) {
            result[i] = '0'
        } else {
            result[i] = '0'
        }
    }
    if (result[0] === '1') {
        let i = 0;
        result[0] = '0'
        while (result[i] != '1')
            result.shift();
        i++
        result.unshift('-');
    }
    return result;
}

let subtraction = (draft3) => {
    prop2 = ['0', '0', '0', '0', '0', '0', '0', '0']
    draft3.X1[0] === '0' ? prop2[0] = '0' : prop2[0] = '1';
    for (let i = draft3.X1.length - 1; i > 0; i--) {
        if (draft3.X1[i] === '1' && draft3.X2[i] === '1') {
            prop2[i] = '0';
        } else if (draft3.X1[i] === '1' && draft3.X2[i] === '0') {
            prop2[i] = '1';
        } else if (draft3.X1[i] === '0' && draft3.X2[i] === '1') {
            if (draft3.X1.indexOf('1', 1) < i)
                prop2[i] = '1'
            draft3.X1[draft3.X1.lastIndexOf('1')] = '0';
        } else if (draft3.X1[i] === '0' && draft3.X2[i] === '0') {
            prop2[i] = '0';
        }
        draft3.X1[i] = '0';
    }
    return prop2;
}

let beShort = (prop) => {
    let i = 0, arr = prop;
    while (arr[i] != '1')
        arr.shift();
    i++
    return arr
}

let toStr = (prop) => {
    let st = '';
    for (let elem in prop)
        st += prop[elem];
    return st;
}

let Addition = (prop) => {
    let result = [];
    prop.X1[prop.X1.length - 1] === '1' || prop.X2[prop.X1.length - 1] === '1'? result[prop.X1.length - 1] = '1' : result[prop.X1.length - 1] = '0';
    let next = false;
    for (let i = 0; i < prop.X1.length - 1; i++) {
        if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == false) {
            result[i] = '0'
            next = true
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '1' && next == false) || (prop.X1[i] === '1' && prop.X2[i] === '0' && next == false)) {
            result[i] = '1'
        } else if (prop.X1[i] === '1' && prop.X2[i] === '1' && next == true) {
            result[i] = '1'
        } else if ((prop.X1[i] === '0' && prop.X2[i] === '0' && next == true)) {
            result[i] = '1'
            next = false
        } else if ((prop.X1[i] === '1' && prop.X2[i] === '0' && next == true) || (prop.X1[i] === '0' && prop.X2[i] === '1' && next == true)) {
            result[i] = '0'
        } else if (prop.X1[i] === '0' && prop.X2[i] === '0' && next == false) {
            result[i] = '0'
        }
    }
    return result;
}