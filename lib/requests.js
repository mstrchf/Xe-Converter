import axios from "axios";
const BASE_URl = "https://api.cloudmersive.com/currency/exchange-rates";

// converts specified amount of a currency to another
export async function convertCurrency(source, destination, amount) {
  const response = await axios.post(
    `${BASE_URl}/convert/${source}/to/${destination}`,
    amount,
    { headers: { "Content-Type": "application/json", Apikey: "aced66ef-06bb-46ed-bdd3-363654b418ad" } }
  );

  console.log(response.data);
}

// gets list of all available currencies
export async function getCurrencies() {
  let response = await axios.post(`${BASE_URl}/list-available`, "", {
    headers: { "Content-Type": "application/json", Apikey: "aced66ef-06bb-46ed-bdd3-363654b418ad" },
  });

  return(response.data.Currencies)
}
