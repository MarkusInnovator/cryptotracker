// src/components/PriceCard.tsx
import React from "react";

type PriceCardProps = {
  coinName: string;
  price: number;
};

export const PriceCard: React.FC<PriceCardProps> = ({ coinName, price }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      margin: "1rem",
      borderRadius: "8px",
      textAlign: "center",
      width: "200px"
    }}>
      <h2>{coinName.toUpperCase()}</h2>
      <p>💰 {price} USD</p>
    </div>
  );
};
