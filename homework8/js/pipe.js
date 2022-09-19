function pipe(x, ...callbacks) {
    let sumOfArguments = x;
    
    for(let i = 0; i < callbacks.length; i++) {
        sumOfArguments = callbacks[i](sumOfArguments);
    }

    return sumOfArguments;
}
