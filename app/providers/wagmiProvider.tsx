'use client'

import React from 'react';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from '../config/config';

// Стили RainbowKit должны быть импортированы один раз
import '@rainbow-me/rainbowkit/styles.css';
import { whitechain } from 'viem/chains';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: "#000",
          borderRadius: "small",
          fontStack: "rounded",
          accentColorForeground: "#fff",
        })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}