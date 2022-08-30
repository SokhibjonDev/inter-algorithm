// ## // ## array reverse algotirm

// const arr = [1, 2, 3, 4, 5, 6]

// for (let i = arr.length - 2; i >= 0; i--) {
//     arr.push(arr.splice(i, 1)[0])
// }
// console.log(arr);


// ## // ## two sum

// var twoSum = function (nums, target) {
//     for (let i = 0; i <= nums.lenght - 1; i++) {
//         let item1 = nums[i]
//         for (let j = i + 1; j <= nums.lenght - 1; j++) {
//             let item2 = nums[j]
//             let sum = item1 + item2
//             if (sum === target) {
//                 return [i, j]
//             }
//         }
//     };
// };


// ## // ## two sum

// function divisor(num) {
//     let nums = []
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             nums.push(i)
//         }
//     }

//     if (nums.length === 0) {
//         return num + "is prime"
//     }else{
//         return nums
//     }
// }

// console.log(divisor(12));

// ## // ## Counter // Camouflage func()

// function Counter() {
//     this.val = 0
//     const comf = this

//     this.increment = function () {
//         comf.val = comf.val+1
//     }
//     this.value = function () {
//         console.log(comf.val);
//     }
//     this.reset = function () {
//         comf.val = 0
//     }

//     this.decrement = function () {
//         comf.val = comf.val-1
//     }
// }

// function makeCounter() {
//     return new Counter()
// }

// const counter1 = makeCounter()

// counter1.value()
// counter1.increment()
// counter1.decrement()
// counter1.reset()




// /// multBy

// const array = [10, 20, 30, 40, 50];

// Array.prototype.multBy = function (number) {
//     return this.map(function (i) {
//         return i * number
//     })
// }
// console.log(array.multBy(number = 2));


//  // function mult(arr, number) {
// //     return arr.map(function (i) {
// //         return i * number
// //     })
// // }
// // console.log(mult(array, number = 10));