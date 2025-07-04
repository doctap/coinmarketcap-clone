import clsx from "clsx";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { SiTether } from "react-icons/si";

const common = {
  size: 20,
  className: 'w-40 h-40 flex items-center justify-center rounded-md'
}

export const COIN_ICON: Record<string, React.JSX.Element> = {
  bitcoin: (
    <div className={clsx('bg-yellow-100', common.className)}>
      <BsCurrencyBitcoin size={common.size} className='text-yellow' />
    </div>
  ),
  ethereum: (
    <div className={clsx('bg-blue-100', common.className)}>
      <SiEthereum size={common.size} className='text-blue' />
    </div>
  ),
  tether: (
    <div className={clsx('bg-green-100', common.className)}>
      <SiTether size={common.size} className='text-green' />
    </div>
  )
}
