export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (10 / bitcoin.BRL.sell).toFixed(6);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
