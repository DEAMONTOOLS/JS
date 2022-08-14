function isInteger(num1) {
    let haveNumRemaider = num1 - Math.floor(num1);
    if (haveNumRemaider === 0)
        return true;
    else
        return false;   
}