document.getElementById('transactions-box').addEventListener('click', function () {
    this.classList.remove("border-slate-200");
    this.classList.add("bg-blue-50", "border-2", "border-blue-300");
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'flex';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
})