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


//Task 4: Subscription Pricing Model - Parameters and Arguments
//Write a function calculateSubscriptionCost(plan, months, discount = 0) that calculates cost based on subscription plans.
const calculateSubscriptionCost = (plan, months, discount = 0) => {
    let totalCost = 0;
    if (plan === "Basic") {
        totalCost = (10 * months) - discount; //$10/month if the subscription plan is basic.
    } else if (plan === "Premium") {
        totalCost = (20 * months) - discount; //$20/month if the subscription plan is premium.
    } else if (plan === "Enterprise") {
        totalCost = (50 * months) - discount; //$50/month is the subscription plan is enterprise.
    }
    return totalCost;

};
//Log the results.
console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`); //Expected output: "Total Cost: $50"
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`); //Expected output: "Total Cost: $240"


//Task 5: Currency Conversion - Returning Values
//Write a function convertCurrency(amount, exchangeRate) that returns the converted amount.
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = (amount * exchangeRate).toFixed(2); //The formula for calculating the converted amount.
    return convertedAmount;
};
//Log the results.
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`); //Expected output: "Converted Amount: $110.00"
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`); //Expected output: "Converted Amount: $212.50"


//Task 6: Discount Strategy for Bulk Orders - High-Order Functions
//Declare an array orders with at least five order amounts.
let orders = [200, 600, 1200, 450, 800];
//Write a higher-order function applyBulkDiscount(orders, discountFunction) that applies a 10% discount on orders above $500.
function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    return discountedOrders;
};
let updatedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
//Log the result.
console.log("Updated Orders: ", updatedOrders); //Expected output: [200, 540, 1080, 450, 720]


//Task 7: Business Expense Tracker - Closures
//Write a function createExpenseTracker() that returns another function to add expenses and keep a running total.
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(amount) {
        totalExpenses += amount;
        return totalExpenses;
    };
};
//Log the results.
let tracker = createExpenseTracker();
console.log(`Total Expenses: $${tracker(200)}`); //Expected output: "Total Expenses: $200"
console.log(`Total Expenses: $${tracker(150)}`); //Expected output: "Total Expenses: $350"


//Task 8: Employee Promotion Evaluation - Recursion Functions
//Write a recursive function calculateYearsToPromotion(employeeLevel) that determines years to reach level 10.
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return "Years to Level 10: 0"; //No years needed for promotion if it's level 10 or above.
    };
    let years = (10 - employeeLevel) * 2; //Calculate the required years and each promotion takes 2 years.
    return years;
};
//Log the results.
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); //Expected output: "Years to Level 10: 6"
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`); //Expected output: "Years to Level 10: 10"


