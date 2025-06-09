'use client'

import { useCoinsQuery } from "@/hooks";
import { intFormatter } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, UpDownIndicator } from "@/shared";
import { ExtraProps } from "@/types";
import NextImage from "next/image";
import { CgDollar } from "react-icons/cg";
import { Cases } from "../Cases/Cases";
import { useEffect, useState } from "react";
import { CoinsTableDialog, CoinTableProps } from "../CoinsTableDialog/CoinsTableDialog";

export interface TopCoinTableProps {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentageLastDay: number;
  marketRank: number;
  totalVolume: number;
}

export const TopCoinsTable = ({ className }: ExtraProps) => {
  const { data, isLoading, isError, error } = useCoinsQuery();
  const [tableItems, setTableItems] = useState<TopCoinTableProps[]>([]);
  const [dialogItems, setDialogItems] = useState<CoinTableProps[]>([]);

  const skeletons = (
    <div className='flex flex-col gap-10'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton className='h-40 w-full' key={index} />
      ))}
    </div>
  )

  useEffect(() => {
    if (data) {
      setTableItems(data.slice(0, 5).map(coin => ({
        id: coin.id,
        name: coin.name,
        image: coin.image,
        currentPrice: coin.current_price,
        priceChangePercentageLastDay: coin.market_cap_change_percentage_24h,
        marketRank: coin.market_cap_rank,
        totalVolume: coin.total_volume,
      })))
      setDialogItems(data.map(coin => ({
        name: coin.name,
        image: coin.image,
        currentPrice: coin.current_price,
        totalVolume: coin.total_volume,
        marketRank: coin.market_cap_rank,
        marketCap: coin.market_cap,
        priceChangePercentageLastDay: coin.price_change_percentage_24h,
        highIn24: coin.high_24h,
        lowIn24: coin.low_24h,
      })))
    }
  }, [data]);

  return (
    <Card className={className}>
      <CardHeader className='mb-16 flex-row items-center justify-between px-5'>
        <div>
          <CardTitle className='mb-5'>Market value</CardTitle>
          <CardDescription>5 Top cryptocurrencies</CardDescription>
        </div>
        <CoinsTableDialog data={dialogItems} triggerText="See all" />
      </CardHeader>

      <Cases
        isLoading={isLoading}
        isError={isError}
        error={error}
        skeletons={skeletons}
      >
        <CardContent>
          <Table>
            <TableHeader className='font-semibold text-muted-foreground'>
              <TableRow>
                <TableHead className='pl-10'>Name</TableHead>
                <TableHead className='py-10'>Assets price</TableHead>
                <TableHead className='py-10'>Volume</TableHead>
                <TableHead className='py-10'>Change</TableHead>
                <TableHead className="text-right py-10 pr-10">Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableItems?.map(coin => (
                <TableRow key={coin.id}>
                  <TableCell className="font-medium py-10 pl-10">
                    <NextImage
                      src={coin.image}
                      alt={coin.name}
                      width={20}
                      height={20}
                      className="inline-block mr-10 rounded-full"
                    />
                    {coin.name}
                  </TableCell>
                  <TableCell className='py-10'>
                    <div className='flex items-center font-geist-mono text-muted-foreground'>
                      <CgDollar />
                      {intFormatter({ num: coin.currentPrice, notation: 'standard', fixed: 2 })}
                    </div>
                  </TableCell>
                  <TableCell className='py-10 font-geist-mono text-muted-foreground'>
                    <div className='flex items-center'>
                      <CgDollar />
                      {intFormatter({ num: coin.totalVolume, notation: 'standard', fixed: 2 })}
                    </div>
                  </TableCell>
                  <TableCell className='py-10'>
                    <UpDownIndicator
                      className='text-right pr-[60%]'
                      isUp={coin.priceChangePercentageLastDay < 0}
                      value={`${coin.priceChangePercentageLastDay.toFixed(2)} %`}
                    />
                  </TableCell>
                  <TableCell className="py-10 pr-10 text-right">{coin.marketRank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Cases>
    </Card>
  );
}
