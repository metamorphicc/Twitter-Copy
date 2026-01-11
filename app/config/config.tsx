import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { http } from 'wagmi';

export const config = getDefaultConfig({
  appName: 'twtiterParody',
  projectId: '123', 
  
  chains: [mainnet, polygon, optimism, arbitrum, base],
  
  ssr: true, 

  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});