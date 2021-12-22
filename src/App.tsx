import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useConnectedWallet, useWallet, WalletProvider } from '@terra-money/wallet-provider'
import Terra from './terra/Terra'
import { useQuery, UseQueryResult } from 'react-query'
import { TERRA_QUERY_KEY } from './terra/magicStrings'

function App(props: any) {

  const { status, network, wallets } = useWallet()
  const wholeWallet = useWallet()
  const connectedWallet = useConnectedWallet()
  console.log("upper")

  console.log(wallets)
  console.log(connectedWallet)

  console.log(props)



  return (
    <div className="App">
      <head>
        <meta name="terra-wallet" />
      </head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>Goal: HODL 70% - Trade 30%</div>
      <div>
        <p>Wallet Stats</p>
        <p>{wholeWallet.status}</p>
        
        <Terra connectWallet={props.createReadonlyWalletSession}/>
      </div>
    </div>

  );
}

export default App;
