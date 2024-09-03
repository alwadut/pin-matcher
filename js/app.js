function getPin(){
    const pin = generatePIn();
    const pinString = pin +'';
    if(pinString.length ===4){
        return pin;
    }
    else{
        console.log('three digit pin',pin);
        
        return getPin();
    }
}

function generatePIn(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const genaratePin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = genaratePin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const typeNumberField = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)){
        if( number === 'C'){
            typeNumberField.value = '';
        }
        else if( number === '<' ){
            const digits = previousTypedNumber.split('');
            digits.pop()
            const remainingDigitss = digits.join('');
            typeNumberField.value = remainingDigitss;
        }
    }
    else{
        
        const newTypedNumber = previousTypedNumber+ number;
        typeNumberField.value =newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;

    const pinSuccessMEssage = document.getElementById('pin-success');
    const pinFailuorMEssage = document.getElementById('pin-failure');


    if(typeNumber == currentPin ){
        pinSuccessMEssage.style.display = 'block';
        pinFailuorMEssage.style.display= 'none';


    }
    else{
         pinFailuorMEssage.style.display= 'block';
        pinSuccessMEssage.style.display = 'none';
    }

})