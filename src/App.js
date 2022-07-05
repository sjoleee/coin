import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinlist, setCoinlist] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoinlist(json);
        setLoading(false);
      });
  }, []);
  console.log(coinlist);
  return (
    <div>
      <h1>coins</h1>
      {loading ? <strong>Loading....</strong> : null}
      <div>
        {coinlist.map((coin) => (
          <p>
            {coin.name}({coin.symbol}) : {coin.quotes.USD.price}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
