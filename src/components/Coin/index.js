import React from "react";
import { CoinContainer } from "./CoinElements";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <CoinContainer>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{symbol}</p>
      <p>{price}</p>
      <p>{volume}</p>
      {priceChange < 0 ? (
        <p className="red"> {priceChange.toFixed(2)}% </p>
      ) : (
        <p className="green"> {priceChange.toFixed(2)}% </p>
      )}
      <p>Mkt Cap: ${marketcap}</p>
    </CoinContainer>
  );
};

export default Coin;
