import { useState, useEffect } from "react";
import axios from "axios";
import TableCoins from "./components/TableCoins";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

    setCoins(response.data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="container">
          <div className="row">
            <input
              type="text"
              placeholder="Search a Coin"
              className="form-control bg-dark text-primary border-0 mt-4 p-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <TableCoins coins={coins} search={search}></TableCoins>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
