import { CardList, CoinChartBox, ModalCoins } from "@/components"

export default function Home() {

  return (
    <div className='grid grid-cols-12'>
      <h1 className="sr-only">Crypto coin market</h1>

      <div className='px-36 pt-48 col-span-8 gap-24 flex flex-col'>
        <CardList />
        <CoinChartBox />
      </div>

      <ModalCoins />
    </div>
  );
}
