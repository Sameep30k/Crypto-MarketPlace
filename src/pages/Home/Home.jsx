

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
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value === ""){
      setDisplayCoins(allCoins);
    }
  }
  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoins.filter((item) => {
     return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoins(coins);
  }
    
  useEffect(() => {
    if (Array.isArray(allCoins)) {
      setDisplayCoins(allCoins);
    }
  }, [allCoins]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br/>Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='Search crypto..' required/>

          <datalist id='coinlist'>
            {allCoins.map((item, index)=>(<option key={index} value={item.name}/>))}
          </datalist>
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
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p className='table-p'>{item.market_cap_rank}
                 
                <img src={item.image} alt="" height={35} width={35} />
              </p>
              
               
              
              <p>{item.name}</p>
              <p>{currency?.symbol}{item.current_price}</p>
              <p style={{ textAlign: "center", color: item.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                {item.price_change_percentage_24h?.toFixed(2)}%
              </p>
              <p>{currency?.symbol}{item.market_cap?.toLocaleString()}</p>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
