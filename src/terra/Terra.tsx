import { ConnectedWallet, useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import ConnectWallet from './ConnectWallet';
import { useLCDClient } from '@terra-money/wallet-provider';
import { APIRequester } from '@terra-money/terra.js/dist/client/lcd/APIRequester';
import { BankAPI, Wallet } from '@terra-money/terra.js';
import { isThisTypeNode } from 'typescript';


const Terra = (props: any) => {

  const { status, network, wallets } = useWallet();
  const wall = useConnectedWallet()
  console.log(props)
  const lcd = useLCDClient();
  console.log("lcd")
  console.log(lcd)
  let bal = null

  const doTheThing = async (lcd: any, wallet: ConnectedWallet | undefined) => {
    console.log("doing the thing")
    const b =  await lcd.bank.balance(wallet?.terraAddress ?? "terra1s0492dlwa8pyee8jk02sx963g6wnlg6whtkttl")
    console.log("bbbbbbb - " + JSON.stringify(b))
    return b
  } 


  try {
    lcd.bank.balance(wall?.terraAddress ?? "terra1s0492dlwa8pyee8jk02sx963g6wnlg6whtkttl").then((b) => {
      console.log("b")
      //@ts-ignore
      bal = b[0].get("uluna")?.amount.d[0] / 1000000

      console.log(bal)
    
    })


     // This executes properly but happens after the component is loaded. So I think I need componentDidMount or something.
      let foo = doTheThing(lcd, wall)
      console.log("FOO " + JSON.stringify(foo))
      
      

    if (bal === "" ) {

  const requester = new APIRequester(network.lcd)
  const api = new BankAPI(requester)
  bal = api.balance(wall?.terraAddress ?? "")
}
}
  catch(e) {
    console.log(e)
  }


  return (
    <div className="Terra">
        <button onClick={props.connectWallet}>
      Click me!
    </button>
      <div>Goal: HODL 70% - Trade 30%</div>
      <p>Bal: {bal}</p>
      <div>
      <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
            },
            null,
            2,
          )}
        </pre>
      </section>
      <div>
        <ConnectWallet />
      </div>
    </div>
    </div>
    
  );
}



export default Terra;
