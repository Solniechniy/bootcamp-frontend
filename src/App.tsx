import { useWallet } from '@solana/wallet-adapter-react';
import './App.css';
import logo from '@/assets/logo.svg';
import ConnectedView from './components/ConectedView';

function App() {
  const { publicKey } = useWallet();
  return (
    <>
      {publicKey ? <ConnectedView /> : <img src={logo} />}
      {!publicKey ? (
        <h1>Welcome to Solana FrontEND Bootcamp</h1>
      ) : (
        <>
          <h1>Copy your public key and send to the classroom</h1>
          <h3>{publicKey.toString()}</h3>
        </>
      )}
    </>
  );
}

export default App;
