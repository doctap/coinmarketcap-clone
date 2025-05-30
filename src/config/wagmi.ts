import { http, createConfig } from '@wagmi/core';
import { sepolia } from '@wagmi/core/chains';
import { injected } from '@wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: true,
})