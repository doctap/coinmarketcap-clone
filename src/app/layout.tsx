import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components";
import { QueryClientProvider, ThemeProvider, WagmiProvider } from "./_components";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <WagmiProvider>
          <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main>{children}</main>
              <div id='modal-portal' />
            </ThemeProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}
