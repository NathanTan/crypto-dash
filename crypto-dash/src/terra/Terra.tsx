import { useWallet } from '@terra-money/wallet-provider';
import ConnectWallet from './ConnectWallet';

const Terra = (props: any) => {

  const { status, network, wallets } = useWallet();
  console.log(props)


  return (
    <div className="Terra">
        <button onClick={props.connectWallet}>
      Click me!
    </button>
      <div>Goal: HODL 70% - Trade 30%</div>
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
