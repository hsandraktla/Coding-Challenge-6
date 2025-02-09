//Task 1: Business Profit Calculation - Function Declaration
//Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, untisSold) {
    let totalProfit = (sellingPrice - costPrice) * untisSold; //The formula for calculating total profit.
    return totalProfit;
};
//Log the results.
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); //Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); //Expected output: "Total Profit: $4000"


//Task 2: Sales Tax Computation - Function Expression
//Declare a function expression calculateSalesTax(amount, taxRate) that calculates sales tax.
let calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate; //The formula for calculating sales tax.
    return Math.round(salesTax);
};
//Log the results.
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`); //Expected output: "Sales Tax: $7"
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`); //Expected output: "Sales Tax: $50"


//Task 3: Employee Bonus Calculation - Arrow Function
//Write an arrow function calculateBonus(salary, performanceRating) to determine a bonus based on performanceRating.
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2; //20% of salary
    } else if (performanceRating === "Good") {
        bonus = salary * 0.1; //10% of salary
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; //5% of salary
    }
    return bonus;
    
};
//Log the results.
console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); //Expected output: "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); //Expected output: "Bonus: $700"
