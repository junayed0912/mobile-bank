document.getElementById('bonus').addEventListener('click', function (event) {
    event.preventDefault();

    const couponInput = document.getElementById('bonus-cuopon').value.trim();
    const couponPattern = /^[A-Za-z0-9]{6}$/; // 6 letters/numbers only

    // Validate coupon
    if (!couponPattern.test(couponInput)) {
        alert("Invalid coupon! Must be 6 letters/numbers.");
        return;
    }

    const bonusAmount = Math.floor(Math.random() * 500) + 1;

    const bonusSection = document.getElementById('bonus-section');
    bonusSection.innerHTML = "";

    const msg = document.createElement('div');
    msg.innerHTML = `
        <div class="text-center text-2xl">
            🎉<span class="text-2xl font-bold">Congratulations!</span><br>
            Your coupon <span class="text-blue-600">${couponInput}</span><br>
            unlocked <span class="text-green-700">$${bonusAmount}</span> bonus!
        </div>
    `;

    bonusSection.appendChild(msg);
});

document.getElementById('get-bonus-box').addEventListener('click', function () {
    this.classList.remove("border-slate-200");
    this.classList.add("bg-blue-50", "border-2", "border-blue-300");
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'block';
    document.getElementById('pay-bill-section').style.display = 'none';
})