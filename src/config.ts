import { ethers } from "ethers";
import { IToken, NetworkEnum } from "./types";

export type Config = {
  networkId: NetworkEnum;
  subgraphUrl: string;
  contracts: { [key: string]: `0x${string}` };
  tokens: { [key: string]: IToken };
};

export const maxDecimals = {
  ETH: 2,
};

const sepolia: Config = {
  networkId: NetworkEnum.SEPOLIA,
  subgraphUrl: "http://localhost:8020/",
  contracts: {
    charityId: "0xf8c813e0ee9A4ab70418CD57Dcf1aC2162E2d0fD",
    treasureHunt: "0x7D008848856bc6E83b29c5Fa289c39DF52751068",
  },
  tokens: {
    [ethers.constants.AddressZero]: {
      address: ethers.constants.AddressZero,
      symbol: "ETH",
      name: "ETH",
      decimals: 18,
    },
  },
};

const chains: { [networkId in NetworkEnum]: Config } = {
  [NetworkEnum.SEPOLIA]: sepolia,
};

export const config =
  chains[process.env.NEXT_PUBLIC_NETWORK_ID as unknown as NetworkEnum];
