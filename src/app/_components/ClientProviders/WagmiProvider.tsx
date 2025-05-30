'use client'

import { WagmiProvider as ReactWagmiProvider } from 'wagmi'
import { wagmiConfig } from '@/config/wagmi'
import { PropsWithChildren } from 'react'

export function WagmiProvider({ children }: PropsWithChildren) {
  return (
    <ReactWagmiProvider config={wagmiConfig}>
      {children}
    </ReactWagmiProvider>
  )
}
