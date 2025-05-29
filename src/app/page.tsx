import { CardList, CoinChartBox, GlobalMarketOverview, MarketHighlights } from "@/components"

export default function Home() {
  return (
    <div className='grid grid-cols-[2fr_1.1fr] gap-24 px-36 py-48'>
      <h1 className="sr-only">Crypto coin market</h1>
      <div>
        <CardList className='mb-24' />
        <CoinChartBox />
      </div>
      <div>
        <GlobalMarketOverview className='h-fit mb-24' />
        <MarketHighlights />
      </div>
    </div>
  );
}
