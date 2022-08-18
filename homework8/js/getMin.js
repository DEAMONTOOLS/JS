function getMin(...nums) {
    const argumentCount = nums.length;
    let theSmallestNum = nums[0];

    for( let i = 0; i < argumentCount; i++) {
        if (nums[i] < theSmallestNum)
            theSmallestNum = nums[i];
    }

    return theSmallestNum;
}
