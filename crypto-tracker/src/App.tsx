// src/App.tsx
import { useEffect, useState } from "react";
import { getCryptoPrice } from "./api";
import { PriceCard } from "./components/PriceCard";

const coins = ["bitcoin", "ethereum", "solana"];

function App() {
  
  const [prices, setPrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const updatedPrices: { [key: string]: number } = {};
      for (const coin of coins) {
        updatedPrices[coin] = await getCryptoPrice(coin);
      }
      setPrices(updatedPrices);
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {coins.map((coin) =>
        prices[coin] ? (
          <PriceCard key={coin} coinName={coin} price={prices[coin]} />
        ) : (
          <p key={coin}>Lade {coin}...</p>
        )
      )}
    </div>
  );
}

export default App;
