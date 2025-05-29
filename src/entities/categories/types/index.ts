export type Category = {
  id: string;
  name: string;
  market_cap: number;
  market_cap_change_24h: number;
  content: string;
  top_3_coins_id: string[];
  top_3_coins: string[]; // image links
  volume_24h: number;
  updated_at: string; // ISO-string format
}

export type CategoryProps = {
  id: string;
  name: string;
}
