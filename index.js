// ## // ## array reverse algotirm

const arr = [1, 2, 3, 4, 5, 6]

for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr.splice(i, 1)[0])
}
console.log(arr);