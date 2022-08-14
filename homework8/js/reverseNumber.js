function reverseNumber(num) {
    let reversNum = 0;
    while(num !== 0) {
        reversNum = reversNum * 10 + num % 10 ;
        num = Math.trunc(num / 10);
    }
    return reversNum;
}