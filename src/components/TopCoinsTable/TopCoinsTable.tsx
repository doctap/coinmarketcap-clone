'use client'

import { useCoinsQuery } from "@/hooks";
import { intFormatter } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, UpDownIndicator } from "@/shared";
import { ExtraProps } from "@/types";
import NextImage from "next/image";
import { CgDollar } from "react-icons/cg";
import { Cases } from "../Cases/Cases";

export const TopCoinsTable = ({ className }: ExtraProps) => {
  const { data, isLoading, isError, error } = useCoinsQuery({ limit: 5, vsCurrency: 'usd' })

  const skeletons = (
    <div className='flex flex-col gap-10'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton className='h-40 w-full' key={index} />
      ))}
    </div>
  )

  return (
    <Card className={className}>
      <CardHeader className='mb-24'>
        <CardTitle>Market value</CardTitle>
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
              {data?.map(coin => (
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
