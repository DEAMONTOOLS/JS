function pipe(x) {
    const argLength = arguments.length;
    let argumentsSum = 0;
    for(let i = 1; i < argLength; i++) {
        arguments[i] = arguments[i](arguments[i-1]);
        argumentsSum = arguments[i];
    }
    return argumentsSum;
}
