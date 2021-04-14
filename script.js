//set default password
const realEmail="admin@email.com";
const realPassword="admin";
document.getElementById('login-email').value=realEmail;
document.getElementById('login-password').value=realPassword;

function authorization(emailId,passwordId){
    const email=document.getElementById(emailId).value;
    const password=document.getElementById(passwordId).value;

    if(email==realEmail && password==realPassword){
        const loginArea = document.getElementById('login-area');
        loginArea.style.display="none";
        const transactionArea = document.getElementById('transaction-area')
        transactionArea.style.display="block";
    }
    else if(email!=realEmail){
        window.alert("Email doesn't exist!");
    }
    else{
        window.alert("Wrong Password!");
    }
}

const loginbtn=document.getElementById('login');
loginbtn.addEventListener('click',function(event){
    authorization('login-email','login-password');
    
})
//deposit button event handler 
function updateSpanText(id,inputId,sign){
    const current=parseFloat(document.getElementById(id).innerText);
    const input=parseFloat(document.getElementById(inputId).value);        
    
    if(document.getElementById(inputId).value==""){
        return; //for avoiding NaN value
    }
    
    if(sign=='+'){
        document.getElementById(id).innerText=(current+input);
    }
    else if(sign=='-'){
        document.getElementById(id).innerText=(current-input);
    }
}
document.getElementById('deposit-button').addEventListener('click',function(event){

    updateSpanText("deposit-amount","deposit-input",'+');
    updateSpanText("balance-amount","deposit-input",'+');
    document.getElementById("deposit-input").value="";  //empty after input a value
})
//withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click',function(event){
    updateSpanText("withdraw-amount","withdraw-input",'+');
    updateSpanText("balance-amount","withdraw-input",'-');
    document.getElementById("withdraw-input").value="";  //empty after input a value
})