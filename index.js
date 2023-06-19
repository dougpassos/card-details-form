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
