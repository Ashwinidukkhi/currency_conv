const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  fetch(`https://open.er-api.com/v6/latest/${currencyFirstEl.value}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencySecondEl.value];
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
      exchangeRateEl.innerText =
        `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);


updateRate();
