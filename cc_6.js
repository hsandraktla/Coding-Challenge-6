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