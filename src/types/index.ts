export interface ExtraProps {
  className?: string;
}

export type FiatCurrency = 'usd'
export type Periods = 7 | 15 | 30
export type Href = `http://${string}` | `https://${string}` | `/${string}` | `#${string}`
