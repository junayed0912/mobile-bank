document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('number').value.trim();
    const Pin = parseInt(document.getElementById('pin').value.trim());
    if(mobileNumber.length === 11 && mobileNumber.startsWith('01')){
       if(Pin === 1234)
       {
            window.location.href = './main.html';
       }
       else{
        alert("Pin is not correct");
       }
    }
    else{
        alert("Need valid account number");
    }
})