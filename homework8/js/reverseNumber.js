const reversNumber = (numberToReverse, acc = 0) => {
    if (numberToReverse === 0) {
        return acc;
    }

    return reversNumber(Math.trunc(numberToReverse/10), acc * 10 + numberToReverse % 10);
};


const reverseNumberWithoutMath = (numberToReverse) => {
    return parseInt(numberToReverse.toString().split('').reverse().join(''));
};