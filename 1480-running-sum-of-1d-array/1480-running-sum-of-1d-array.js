/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sumArr = [];
    var sum = nums[0];
    sumArr.push(sum);
    for (var i = 1; i < nums.length; i++) {
        sum += nums[i];
        sumArr.push(sum);
    }
    return sumArr;
};