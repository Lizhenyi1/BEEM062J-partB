const woc_api_url ="https://api.whatsonchain.com/v1/bsv/main/exchangerate"
async function getwoc(){
    const response = await fetch(woc_api_url);
    const data = await response.json();
    const {currency, rate} = data;
    document.getElementById("prc").textContent=rate;
    document.getElementById("cur").textContent=currency;
    console.log(rate);
    console.log(currency);

}
getwoc()