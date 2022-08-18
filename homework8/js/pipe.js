function pipe(...args) {
    const argLength = args.length;

    let argumentsSum = 0;

    for(let i = 1; i < argLength; i++) {
        args[i] = args[i](args[i-1]);
        argumentsSum = args[i];
    }
    
    return argumentsSum;
}
