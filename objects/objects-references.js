let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amountEx) {
    account.expenses += amountEx;
}

let addIncome = function (account, amountIn)  {
    account.income += amountIn;
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addIncome(myAccount, 400);
addExpense(myAccount, 2);
addExpense(myAccount, 19);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));






