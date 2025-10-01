document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('number').value;
    const Pin = parseInt(document.getElementById('pin').value);
    console.log(typeof Pin);
    if(mobileNumber.length === 11){
       if(Pin === 1234)
       {
            window.location.href = './main.html';
       }
       else{
        console.log("Pin not correct");
       }
    }
    else{
        console.log("Need valid account number");
    }
})