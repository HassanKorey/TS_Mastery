// Functions: addExpense (concat), removeExpense (filter), totalSpent (reduce), byCategory (filter), biggestExpense (reduce), hasExpensiveItem (some), sortedByAmount (slice and sort). None of them may change the input list. Log the original list at the end to prove it is unchanged.

const initialExpenses = [
  { id: 1, title: "Rent", amount: 150000, category: "Housing" },
  { id: 2, title: "Groceries", amount: 45000, category: "Food" },
  { id: 3, title: "Internet", amount: 20000, category: "Utilities" }
];
function addExpense(expenses, newExpense){
    return expenses.concat(newExpense);
}

function removeExpense(expenses,id){
    return expenses.filter(exp => exp.id !== id);
}

function totalSpent(expenses){
    return expenses.reduce((total, exp) => total + exp.expenses,0);
}

function byCategory(expenses,category){
    return expense.filter(exp => exp.category === category);
}

function biggestExpense(expenses){
    if (expense.length === 0){
        return null
    }
    return expenses.reduce((max, exp) => (exp.amount > max.amount ? exp : max));
}

function hasExpensiveItem(){
    
    return expenses.some(exp => exp.amount > threshold);
}

function sortedByAmount(){
    return expenses.slice().sort((a, b) => b.amount - a.amount);
}

const newExpensesList = addExpense(initialExpenses, {
  id: 4,
  title: "Airtime",
  amount: 1000,
  category: "Utilities"
});

console.log("Original list length (should be 3):", initialExpenses.length);
console.log("New list length (should be 4):", newExpensesList.length);
console.log("Original List Unchanged:", initialExpenses);