// calculating expenses and balance

// get values
function getValue(format) {
    const formatInput = document.getElementById(format + '-input');
    const formatValue = parseFloat(formatInput.value);
    return formatValue;
}
getValue('income');
getValue('food');
getValue('rent');
getValue('clothes');

// calculate expenses
function getTotalExpenses() {
    const expenses = getValue('food') + getValue('rent') + getValue('clothes');
    return expenses;
}

// calculate balance
function getBalance() {
    const balance = getValue('income') - getTotalExpenses();
    return balance;
}

// making change in html
function changeHtml() {
    // change total expenses inner text
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = getTotalExpenses();

    // change balance inner text
    const totalBalance = document.getElementById('balance')
    totalBalance.innerText = getBalance();
}

document.getElementById('btn-calc').addEventListener('click', function () {
    changeHtml()
})



// calculating saving amount and remaining balance

// calculate saving
function getSavings() {
    const saving = (getValue('income') * getValue('save')) / 100;
    return saving;
};

// calculate remaining balance
function balanceRemaining() {
    const remainingBalance = getBalance() - getSavings();
    return remainingBalance;
}

// making change in html after saving
function htmlAfterSaving() {
    // change saving amount inner text
    const saveAmount = document.getElementById('saving-amount');
    saveAmount.innerText = getSavings();

    // change remaining balance inner text
    const remaining = document.getElementById('remaining-balance');
    remaining.innerText = balanceRemaining();
}

document.getElementById('btn-save').addEventListener('click', function () {
    htmlAfterSaving();
})