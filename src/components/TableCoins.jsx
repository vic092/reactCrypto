import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-4 table-hover text-light">
      <thead>
        <tr>
          {titles.map((t, i) => (
            <td key={i}>{t}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, i) => (
          <CoinRow coin={coin} key={i} index={(i += 1)}></CoinRow>
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
