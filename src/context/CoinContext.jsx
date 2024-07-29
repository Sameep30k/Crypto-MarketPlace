// // import { createContext, useEffect, useState } from "react";
// import React, { createContext, useEffect, useState } from 'react';

// export const CoinContext = createContext();

// const CoinContextProvider = (props) => {

//         const [allcoin, setAllCoin] = useState([]);
//         const [currency, setCurrecy] = useState({
//             name: "usd",
//             symbol: "$"
//         })

//         const fetchAllCoin = async () => {
//             const options = {
//                 method: 'GET',
//                 headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8zLuxPjerJP9TriaeJA3RGVs'}
//               };
              
//               fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
//                 .then(response => response.json())
//                 .then(response => setAllCoin(response))
//                 .catch(err => console.error(err));
//         }

//         useEffect(() => {
//             fetchAllCoin();
//         },[currency]);

//         const contextValue = {
//                 allcoin, currency, setCurrecy

//         };

//         return(
//         <CoinContextProvider value={contextValue}>
//             {props.children}
//         </CoinContextProvider>
//     );
// };
// export default CoinContextProvider;

// import React, { createContext, useEffect, useState } from 'react';

// export const CoinContext = createContext();

// const CoinContextProvider = (props) => {
//   const [allCoins, setAllCoins] = useState([]);
//   const [currency, setCurrency] = useState({
//     name: "usd",
//     symbol: "$"
//   });

//   const fetchAllCoins = async () => {
//     const options = {
//       method: 'GET',
//       headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-8zLuxPjerJP9TriaeJA3RGVs' }
//     };

//     fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
//       .then(response => response.json())
//       .then(response => setAllCoins(response))
//       .catch(err => console.error(err));
//   };

//   useEffect(() => {
//     fetchAllCoins();
//   }, [currency]);

//   const contextValue = {
//     allCoins, currency, setCurrency
//   };

//   return (
//     <CoinContext.Provider value={contextValue}>
//       {props.children}
//     </CoinContext.Provider>
//   );
// };

// export default CoinContextProvider;

import React, { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

  const fetchAllCoins = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-8zLuxPjerJP9TriaeJA3RGVs' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
      .then(response => response.json())
      .then(response => setAllCoins(response))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoins, currency, setCurrency
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;






