document.getElementById('transfer').addEventListener('click', function (event) {
    event.preventDefault()
    const mobileNumber = document.getElementById('user-acc-number').value;
    const Pin = parseFloat(document.getElementById('pin-transfer').value)
    const transferedAmount = parseFloat(document.getElementById('amount-to-transfer').value);
    const originalAmount = document.getElementById('original-amount');
    const mainAmount = parseFloat(originalAmount.innerText);

    if (mobileNumber.length === 11 && mobileNumber.startsWith('01')) {
        if (Pin === 1234) {
            const subtract = mainAmount - transferedAmount;
            originalAmount.innerText = subtract;
        }
        else {
            alert("Pin is not correct");
        }
    }
    else {
        alert("Need valid account number");
    }
})
