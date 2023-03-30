// calculating expenses and balance

// get values

function getValue(format) {
    const formatInput = document.getElementById(format + '-input');
    const formatValue = parseFloat(formatInput.value);
    return formatValue;
}

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

    // to change total expenses inner text
    const totalExpenses = document.getElementById('total-expenses');

    // to change balance inner text
    const totalBalance = document.getElementById('balance')

    if ((getValue('income') < 0) || (getValue('food') < 0) || (getValue('rent') < 0) || (getValue('clothes') < 0)) {
        document.getElementById('number-error').style.display = 'block';
        document.getElementById('invalid-error').style.display = 'none';
        document.getElementById('string-error').style.display = 'none';
        totalExpenses.innerText = ' ';
        totalBalance.innerText = ' ';
    }
    else if (isNaN(getValue('income')) || isNaN(getValue('food')) || isNaN(getValue('rent')) || isNaN(getValue('clothes'))) {
        document.getElementById('string-error').style.display = 'block';
        document.getElementById('invalid-error').style.display = 'none';
        document.getElementById('number-error').style.display = 'none';
        totalExpenses.innerText = ' ';
        totalBalance.innerText = ' ';
    }
    else if (getTotalExpenses() > getValue('income')) {
        document.getElementById('invalid-error').style.display = 'block';
        document.getElementById('string-error').style.display = 'none';
        document.getElementById('number-error').style.display = 'none';
        totalExpenses.innerText = ' ';
        totalBalance.innerText = ' ';
    }
    else {
        document.getElementById('invalid-error').style.display = 'none';
        document.getElementById('string-error').style.display = 'none';
        document.getElementById('number-error').style.display = 'none';
        totalExpenses.innerText = getTotalExpenses();
        totalBalance.innerText = getBalance();
    }
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
    if (saveAmount.innerText > remaining.innerText) {
        document.getElementById('invalid-saving').style.display = 'block'
    }
    else {
        document.getElementById('invalid-saving').style.display = 'none'
    }
}

document.getElementById('btn-save').addEventListener('click', function () {
    htmlAfterSaving();
})