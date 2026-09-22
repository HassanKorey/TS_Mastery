function findMax(numbers){
for (let i = 1; i < numbers.length; i++) {
    if (numbers.length === 0) {
        return 0;
    }
     if (numbers[i] > numbers[0]) {
            numbers[0] = numbers[i];
        }
    }
    return numbers[0];
}

function findMin(numbers){
    if (numbers.length === 0) {
        return 0;
    }
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[0]) {
            numbers[0] = numbers[i];
        }
    }
    return numbers[0];
}

function findAverage(numbers){
    result = 0;
    if (numbers.length === 0) {
        return 0;
    }
    for (let i = 1; i < numbers.length; i++) {
       result += numbers[i];
       res = result / numbers.length;
    }
    return res;
}

const nums = [12, 5, 88, 3, 45, 88, -7];
console.log(findMax(nums)); // 88
console.log(findMin(nums)); // -7
console.log(findAverage(nums)); // check this by hand
