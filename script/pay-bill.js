document.getElementById('pay-bill-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const mobileNumber = document.getElementById('biller-number').value;
    const Pin = parseFloat(document.getElementById('pay-pin').value)
    const payBill = parseFloat(document.getElementById('pay-amount').value);
    const originalAmount = document.getElementById('original-amount');
    const mainAmount = parseFloat(originalAmount.innerText);

    if (mobileNumber.length === 11 && mobileNumber.startsWith('01')) {
        if (Pin === 1234) {
            if (mainAmount !== 0 && payBill <= mainAmount) {
                const subtract = mainAmount - payBill;
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
                                <h2 class="font-semibold text-gray-600">Bill Payed</h2>
                                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div class="text-red-600 font-semibold">
                            -${payBill}
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
