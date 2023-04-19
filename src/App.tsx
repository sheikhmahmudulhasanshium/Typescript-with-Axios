import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
export type Crypto={
        id: string;
        symbol: string;
        name: string;
        current_price:number;
        ath:number;
        atl:number;
        high_24h:number;
        low_24h:number;
}
function App() {
  const [cryptos,setCryptos]=useState<Crypto[] | null>()
  useEffect(()=>{
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=bdt&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    axios.get(url).then((response)=>{
      setCryptos( response.data)
    })
  },[])
  return (
    <div className="App">
      {cryptos?cryptos.map((crypto)=>{
        return <p>{crypto.name + '$' + crypto.current_price}</p>
      }):null}
      
    </div>
    
  );
}

export default App;
