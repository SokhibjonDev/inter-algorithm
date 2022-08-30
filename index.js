// ## // ## array reverse algotirm

// const arr = [1, 2, 3, 4, 5, 6]

// for (let i = arr.length - 2; i >= 0; i--) {
//     arr.push(arr.splice(i, 1)[0])
// }
// console.log(arr);


// ## // ## two sum

var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.lenght - 1; i++) {
        let item1 = nums[i]
        for (let j = i + 1; j <= nums.lenght - 1; j++) {
            let item2 = nums[j]
            let sum = item1 + item2
            if (sum === target) {
                return [i, j]
            }
        }
    };
};
