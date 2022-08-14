function getMin() {
    let argumentCount = arguments.length;
    let theSmallestNum = arguments[0];
    for( let i = 0; i < argumentCount; i++) {
        if (arguments[i] < theSmallestNum)
            theSmallestNum = arguments[i];
    }
    console.log(theSmallestNum);
}
