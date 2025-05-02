// src/api.ts
import axios from "axios";

export async function getCryptoPrice(coinId: string) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
  );
  return response.data[coinId].usd;
}


