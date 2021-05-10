import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
//importting components
import Coin from "./components/Coin";
import { Container, Title, SearchBox } from "./components/SearchBoxElemnts";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=100"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Container>
        <Title>Today's Cryptocurrency Prices</Title>
        <form>
          <SearchBox
            type="input"
            placeholder="Search"
            onChange={searchHandler}
          ></SearchBox>
        </form>
      </Container>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.market_cap_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
