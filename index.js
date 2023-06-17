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

const updateLabel = (label, input) => {
  let inputValue = input.value
  label.innerText = inputValue;
}

const upNameCard = () => {
  updateLabel(lbNameCard, iptCardName )
};

const upNumCard = () => {
  updateLabel(lbNumCard, iptCardNumber )
};

const upExpDateMmCard = () => {
  updateLabel(lbSpnMm, iptCardDateMm )
}

const upExpDateYyCard = () => {
  updateLabel(lbSpnYy, iptCardDateYy )
}

const upCvcCard = () => {
  updateLabel(lbCardCvc, iptCardCvc )
}



