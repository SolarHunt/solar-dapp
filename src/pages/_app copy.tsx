import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from './Layout';

import { EthereumClient, w3mProvider, w3mConnectors, 
  // modalConnectors 
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { Chain, WagmiConfig, configureChains, createClient } from 'wagmi';
import { polygon, polygonMumbai, goerli } from "wagmi/chains";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { customChains } from '../chains';

// const chains: Chain[] = [customChains.polygonMumbai];

// // Wagmi client
// const { provider } = configureChains(chains, [
//   jsonRpcProvider({
//     rpc: chain => {
//       return { http: chain.rpcUrls.default };
//     },
//   }),
// ]);
// const wagmiClient = createClient({
//   autoConnect: false,
//   connectors: modalConnectors({ appName: 'web3Modal', chains }),
//   provider,
// });

// // Web3Modal Ethereum Client
// const ethereumClient = new EthereumClient(wagmiClient, chains);

const chains = [goerli];
const projectId = "69297e3faef3159ffb74ec3daaa56a8f"//process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
console.log(projectId)

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

function MyApp({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  console.log(projectId)
  useEffect(() => {
    setReady(true);
    // wagmiClient.autoConnect();
  }, []);

  return (
    <>
    {ready ? (
                <Layout>
                  <Component {...pageProps} />
                  {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
                </Layout>
                ) : null}
    </>
  );
}

export default MyApp;
