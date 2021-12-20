import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useWallet } from '@terra-money/wallet-provider';
import Terra from './terra/Terra';

function App(props: any) {

  const { status, network, wallets } = useWallet();
  console.log("upper")
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
        <Terra connectWallet={props.createReadonlyWalletSession}/>
      </div>
    </div>

  );
}

export default App;
