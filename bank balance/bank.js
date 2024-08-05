let balance = 0;
function deposit() {
    let depositAmount = parseFloat(document.getElementById('deposit_in').value);
    
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    balance += depositAmount;
    updateBalanceDisplay();
    document.getElementById('deposit_in').value = '';
}

function withdraw() {
    let withdrawAmount = parseFloat(document.getElementById('withdraw_in').value);
    
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (withdrawAmount > balance) {
        alert('Insufficient balance.');
        return;
    }
    balance -= withdrawAmount;
    updateBalanceDisplay();
    document.getElementById('withdraw_in').value = '';
}
function updateBalanceDisplay() {
    document.getElementById('balance_display').innerText = `₹${balance}`;
}
function checkBalance() {
    updateBalanceDisplay();
}
