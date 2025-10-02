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
        }
        else {
            alert("Pin is not correct");
        }
    }
    else {
        alert("Need valid account number");
    }
})
