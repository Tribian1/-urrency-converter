const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementBTC = document.querySelector('[data-value="BTC"]');

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');




async function getCurr () {
    const response = await fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((result) => result.json())
    .then((json) => {
       
        rates.USD = json[0].sale;
        rates.EUR = json[1].sale;
        rates.BTC = json[2].sale * rates.USD;
        console.log(json);

        elementUSD.textContent = rates.USD;
        elementEUR.textContent = rates.EUR;
        elementBTC.textContent = rates.BTC;
    })
}
getCurr();


input.oninput = convertValue;
select.oninput = convertValue;
function convertValue() {
    result.value = (input.value / rates[select.value]).toFixed(4);
}