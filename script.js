let button = document.querySelector(".button");
let continueButton = document.querySelector(".continue");

let cardHolderName = document.querySelector(".cardHolderNameInput");
let cardHolderNumber = document.querySelector(".cardHolderNumberInput");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc = document.querySelector(".cvc");

let backNumber = document.querySelector(".backNumber");
let cardNumber = document.querySelector(".frontNumber")
let cardName = document.querySelector(".name");
let monthCard = document.querySelector(".mm");
let yearCard = document.querySelector(".yy");

let inputs = document.querySelector("input");

let form = document.querySelector(".form");
let thankyou = document.querySelector(".center");

let numberError = document.querySelectorAll(".numberErrpr");
let monthYearError = document.querySelectorAll(".monthYearError");
let cvcError = document.querySelectorAll(".cvcError");



button.addEventListener("click", function() {
    cardNameFun()
    cardNumberFun()
})

continueButton.addEventListener("click", function() {

})

let cardNameFun = function() {
    if(inputs[0].value.match(/^[A-Za-z]+$/)) {
        cardHolderName.innerHTML = cardHolderName.value;
        inputs[0].style.borderColor = "hsl(270, 3%, 87%)"
        return true
    } else {
        cardName.innerHTML
        inputs[0].style.borderColor = "red";
        return false
    }
}

let cardNumberFun = function() {
    if(inputs[1].value.match(/^\d+/) && cardHolderNumber.value.length === 16) {
        cardNumber.innerHTML = cardHolderName.value.match(/.{1,4}/g).join(" ");
        inputs[1].style.borderColor = "hsl(270, 3%, 87%)";
        numberError.style.display = "none";
        return true
    } else {
        cardNumber.innerHTML;
        inputs[1].style.borderColor = "red";
        numberError.style.display = "flex"
        return false
    }
};

