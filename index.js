const lbNumCard = document.getElementById("lb-num-card");
const lbNameCard = document.getElementById("lb-name-card");
const lbSpnMm = document.getElementById("lb-spn-mm");
const lbSpnYy = document.getElementById("lb-spn-yy");
const lbCardCvc = document.getElementById("lb-card-cvc");
const iptCardName = document.getElementById("ipt-card-name");
const iptCardNumber = document.getElementById("ipt-card-number");
const iptCardDateMm = document.getElementById("ipt-card-date-mm");
const iptCardDateYy = document.getElementById("ipt-card-date-yy");
const iptCardCvc = document.getElementById("ipt-card-cvc");
const formCard =  document.getElementById('formCard');

const regexCard = new RegExp(/(\d{4}\s\d{4}\s\d{4}\s\d{4})|(\d{16})/gm);
const regexMM = new RegExp(/0[1-9]|1[0-2]/gm);
const regexCVC = new RegExp(/0[1-9]|1[0-2]/gm);

function ValidateFieldRegex(fieldValue, regex) {
  const regexTest = regex.test(fieldValue);
  if (fieldValue === "" || !regexTest) {
    return false;
  }
  return true;
}

function ValidateFieldNotEmpty(fieldValue) {  
  if (fieldValue === "") {
    return false;
  }
  return true;
}

formCard.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let nameCard = ValidateFieldNotEmpty(iptCardName.value);
  let numCard = ValidateFieldRegex(iptCardNumber.value, regexCard)
  let MMCard = ValidateFieldRegex(iptCardDateMm.value, regexCVC)
  if (nameCard && numCard && MMCard ) {
    console.log("OK");
  } else {
    console.log("NOt OK");
  } 
 
})

function updateLabel(label, input) {
  let inputValue = input.value
  label.innerText = inputValue;
}

function upNameCard() {
  updateLabel(lbNameCard, iptCardName )
};

function upNumCard() {
  updateLabel(lbNumCard, iptCardNumber )
};

function upExpDateMmCard() {
  updateLabel(lbSpnMm, iptCardDateMm )
}

function upExpDateYyCard() {
  updateLabel(lbSpnYy, iptCardDateYy )
}

function upCvcCard() {
  updateLabel(lbCardCvc, iptCardCvc )
}
