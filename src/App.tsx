import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios"

function App() {
  const [currencies,setCurrencies] = useState<[string, string][]>([])
  useEffect(() => {
    axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
    .then((response: any) => {
      setCurrencies(Object.entries(response.data));
    })
  },[]);


  return (
    <div className="App">
     <table >
       <thead>
         <tr>
           <th>Code</th>
           <th>Currency</th>
         </tr>
       </thead>
       <tbody >
         {currencies.map((ele)=>(
           <tr key={ele[0]}>
             <td>{ele[0]}</td>
             <td>{ele[1]}</td>
           </tr>
         ))}
       </tbody>
     </table>
    </div>
  );
}
export default App;
