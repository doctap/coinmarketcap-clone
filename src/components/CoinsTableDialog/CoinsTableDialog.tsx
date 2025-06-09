'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared";
import { useState } from "react";
import { CoinsTable } from "./CoinsTable";
import { columns } from "./Columns";

export interface CoinTableProps {
  name: string;
  image: string;
  currentPrice: number;
  totalVolume: number;
  marketRank: number;
  marketCap: number;
  priceChangePercentageLastDay: number;
  highIn24: number;
  lowIn24: number;
}

export function CoinsTableDialog({
  triggerText,
  data
}: { triggerText: string, data: CoinTableProps[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger disabled={!data} className='text-primary font-semibold'>
        {triggerText}
      </DialogTrigger>
      <DialogContent className='p-24 min-w-fit'>
        <DialogHeader>
          <DialogTitle>All Cryptocurrencies</DialogTitle>
          <DialogDescription>Browse a complete list of cryptocurrencies along with their current prices, market caps, and other important information.</DialogDescription>
        </DialogHeader>
        <CoinsTable columns={columns} data={data} />
      </DialogContent>
    </Dialog>
  )
}