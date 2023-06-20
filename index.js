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
const formCard =  document.querySelector('#formCard');
const sucessCard = document.querySelector('#sucess-card');
const modalError = document.getElementById('dig-error');
const modalButton = document.getElementById('modal-button');
const sucessButton = document.querySelector('#sucess-button')

const regexCard = new RegExp(/(\d{4}\s\d{4}\s\d{4}\s\d{4})|(\d{16})/gm);
const regexMM = new RegExp(/0[1-9]|1[0-2]/gm);
const regexCVC = new RegExp(/\d/gm);

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

const clearFields = () => {
  iptCardName.value = "";
  iptCardNumber.value = "";
  iptCardDateMm.value = "";
  iptCardDateYy.value = "";
  iptCardCvc.value = "";
  lbNumCard.innerText = "0000 0000 0000 0000";
  lbNameCard.innerText = "Jane Appleseed";
  lbSpnMm.innerText = "MM";
  lbSpnYy.innerText = "YY";
  lbCardCvc.innerText = "123";
}

function sucessCardSubmit() {  
  if (formCard.classList.contains("display-flex")) {
    formCard.classList.remove("display-flex");
    formCard.classList.add("display-none");
    sucessCard.classList.remove("display-none");
    sucessCard.classList.add("display-flex");       
  } else {
    formCard.classList.remove("display-none");
    formCard.classList.add("display-flex");
    sucessCard.classList.remove("display-flex");
    sucessCard.classList.add("display-none");
  }  
}

formCard.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let nameCard = ValidateFieldNotEmpty(iptCardName.value);
  let numCard = ValidateFieldRegex(iptCardNumber.value, regexCard);
  let MMCard = ValidateFieldRegex(iptCardDateMm.value, regexCVC);

  if (nameCard && numCard && MMCard ) {    
    sucessCardSubmit()
    console.log("OK - Gravado");
  } else {
    modalError.showModal();
    console.log("Não OK");    
  } 
 
})

modalButton.onclick = () => {
  modalError.close();
}

sucessButton.onclick = () =>{
  clearFields();
  sucessCardSubmit();
}

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
