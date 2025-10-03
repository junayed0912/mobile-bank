document.getElementById('withdraw').addEventListener('click', function (event) {
    event.preventDefault()
    const mobileNumber = document.getElementById('agent-number').value;
    const Pin = parseFloat(document.getElementById('pin-withdraw').value)
    const cashedOut = parseFloat(document.getElementById('amount-to-cashout').value);
    const originalAmount = document.getElementById('original-amount');
    const mainAmount = parseFloat(originalAmount.innerText);

    if (mobileNumber.length === 11 && mobileNumber.startsWith('01')) {
        if (Pin === 1234) {
            if (mainAmount !== 0 && cashedOut <= mainAmount) {
                const subtract = mainAmount - cashedOut;
                originalAmount.innerText = subtract;

                document.getElementById('receipt').style.display = 'none';
                // transction adding
                const transactionSection = document.getElementById('transaction-section');

                const newCard = document.createElement('div');
                newCard.className = 'shadow-md bg-white p-4 rounded-2xl';
                newCard.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <div class="rounded-full bg-gray-200 w-11 h-11 flex items-center justify-center">
                                <img src="assets/wallet1.png" alt="">
                            </div>
                            <div>
                                <h2 class="font-semibold text-gray-600">Cash Out</h2>
                                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div class="text-red-600 font-semibold">
                            -${cashedOut}
                        </div>
                    </div>`;
                transactionSection.appendChild(newCard);
            }
            else {
                alert('Not enough balance');
            }


        }
        else {
            alert("Pin is not correct");
        }
    }
    else {
        alert("Need valid account number");
    }
})

document.getElementById('cashout-box').addEventListener('click', function () {
    this.classList.remove("border-slate-200");
    this.classList.add("bg-blue-50", "border-2", "border-blue-300");
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
})
