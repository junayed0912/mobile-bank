document.getElementById('log-out-btn').addEventListener("click", function () {
    window.location.href = "./index.html";
})



document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const mobileNumber = document.getElementById('acc-number').value;
    const Pin = parseFloat(document.getElementById('pin').value)
    const addedAmount = parseFloat(document.getElementById('amount').value);
    const originalAmount = document.getElementById('original-amount');
    const mainAmount = parseFloat(originalAmount.innerText);

    if (mobileNumber.length === 11 && mobileNumber.startsWith('01')) {
        if (Pin === 1234) {
            const sum = mainAmount + addedAmount;
            originalAmount.innerText = sum;

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
                                <h2 class="font-semibold text-gray-600">Money Added</h2>
                                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div class="text-green-600 font-semibold">
                            +${addedAmount}
                        </div>
                    </div>`;
        transactionSection.appendChild(newCard);

        }
        else {
            alert("Pin is not correct");
        }
    }
    else {
        alert("Need valid account number");
    }
})
