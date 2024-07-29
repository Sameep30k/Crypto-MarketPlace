

// import React, { useContext, useEffect, useState } from 'react';
// import './Home.css';
// import { CoinContext } from '../../context/CoinContext';

// const Home = () => {
//   const { allCoins, currency } = useContext(CoinContext);
//   const [displayCoins, setDisplayCoins] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(allCoins)) {
//       setDisplayCoins(allCoins);
//     }
//   }, [allCoins]);

//   return (
//     <div className='home'>
//       <div className='hero'>
//         <h1>Largest <br /> Crypto MarketPlace</h1>
//         <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
//         <form>
//           <input type="text" placeholder='Search crypto..' />
//           <button type="submit">Search</button>
//         </form>
//       </div>
//       <div className="crypto-table">
//         <div className="table-layout">
//           <p>#</p>
//           <p>Coins</p>
//           <p>Price</p>
//           <p style={{ textAlign: "center" }}>24H Change</p>
//           <p className="market-cap">Market Cap</p>
//         </div>

// {Array.isArray(displayCoins) && displayCoins.length > 0 ? (
//     displayCoins.slice(0, 10).map((item, index) => (

//       <div className="table-layout" key={index}>
//         <p>{item.market_cap_rank}</p>
//         <div className='table-th'>
//         <img src={item.image} alt="" />
//         <p style={{ fontSize: '1em' }}>{item.name + " - " + item.symbol}</p>
//         </div>
//         <p>{item.name}</p>

//         <p>{currency?.symbol}{item.current_price}</p>
//         <p style={{ textAlign: "center", color: item.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
//           {item.price_change_percentage_24h?.toFixed(2)}%
//         </p>
//         <p>{currency?.symbol}{item.market_cap?.toLocaleString()}</p>
//       </div>
//     ))
//   ) : (
//     <p>Loading...</p>
//   )}
// </div>
//     </div>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);

  useEffect(() => {
    if (Array.isArray(allCoins)) {
      setDisplayCoins(allCoins);
    }
  }, [allCoins]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form>
          <input type="text" placeholder='Search crypto..' />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {Array.isArray(displayCoins) && displayCoins.length > 0 ? (
          displayCoins.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              
                {/* <img src={item.image} alt="" />
                <p style={{ fontSize: '1em' }}>{item.name + " - " + item.symbol}</p> */}
              
              <p>{item.name}</p>
              <p>{currency?.symbol}{item.current_price}</p>
              <p style={{ textAlign: "center", color: item.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                {item.price_change_percentage_24h?.toFixed(2)}%
              </p>
              <p>{currency?.symbol}{item.market_cap?.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
