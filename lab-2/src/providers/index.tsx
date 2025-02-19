import { PropsWithChildren, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import '@solana/wallet-adapter-react-ui/styles.css';
import styled from 'styled-components';

const WalletControls = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      //TODO: Add wallets (Phantom and Solflare) here that defined in imports
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
    ],
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
          <WalletControls>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </WalletControls>
        </WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
};
