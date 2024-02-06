/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (numsMap[diff.toString()] != undefined) {
            return [i, numsMap[diff]]
        } else {
            numsMap[nums[i]] = i
        }
    }
    
};

console.log(twoSum([2,7,11,15], 9))