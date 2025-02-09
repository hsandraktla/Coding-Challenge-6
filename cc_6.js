//Task 1: Business Profit Calculation - Function Declaration
//Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, untisSold) {
    let totalProfit = (sellingPrice - costPrice) * untisSold; //The formula for calculating total profit.
    return totalProfit;
};
//Log the results.
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); //Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); //Expected output: "Total Profit: $4000"