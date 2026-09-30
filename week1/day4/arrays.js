
const products = [
    {name : "Laptop", price : 350000, category : "Electronics"},
    {name : "Television", price : 150000, category : "Electronics"},
    {name : "Mouse", price : 15000, category : "Electronics"},
    {name : "Rice", price : 45000, category : "Groceries"},
    {name : "Garri", price : 10000, category : "Groceries"},
    {name : "T-shirt", price : 4000, category : "Clothings"},
    {name : "Soap", price : 1200, category : "Groceries"},
    {name : "Eye-Glass", price : 10000, category : "Accessories"}
];

const under5000 = products.filter(p => p.price < 5000);

const names = products.map(p => p.name);

const totalPriceOfElect = products.filter(p.category === "Electronics").reduce((sum,p) => sum + p.price, 0);

const firstFoodItem = products.find(p.category === "Groceries")

const indexOfSoap = products.findIndex(p.name === "Soap")

const over500000 = products.some(p => p.price > 500000)

const over500 = products.every(p => p.price > 500)

const cheapest = [...products].sort((a,b) => a.price - b.price)

console.log(products[0].price === 350000)
console.log(cheapest)

const alphabeticSort = products.filter(p.category === "Groceries").map(p => p.name).sort();

// Also run the experiments: sort with and without a compare function, and the nums.sort() mutation test. Then rewrite your day 2 stats functions using reduce.
console.log([10,2,5].sort())
console.log([10,2,5].sort((a,b) => a - b ))

const nums = [5,3,1];
const sortedNums = nums.sort();

console.log(nums === sortedNums);

function findMax(numbers){
    if (numbers.length === 0){
        return 0
    };
    return numbers.reduce((max,num) => num > max ? num : max)
}

function findMin(numbers){
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((min,num) => min < num ? min : min);
}

function findAverage(numbers){
    result = 0;
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((avg, num) => avg + num, 0);
    return sum / numbers.length;
}
