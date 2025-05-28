'use client'

import { useGlobalMarketQuery } from "@/hooks";
import { Card, CardContent, CardTitle, Skeleton } from "@/shared";
import { ExtraProps } from "@/types";
import { CgDollar } from "react-icons/cg";

export const GlobalMarketOverview = ({ className }: ExtraProps) => {
  const { data, isLoading } = useGlobalMarketQuery()

  return (
    <Card className={className}>
      <CardTitle className='mb-24 text-center'>Market overview</CardTitle>
      <CardContent className='flex flex-wrap gap-24 justify-center'>
        {!isLoading ? (
          <>
            <MiniCard
              isCurrency
              value={data?.totalMarketCap}
              heading='Total market cap'
              percentage={`${data?.marketCapChange.toFixed(2)} %`}
            />
            <MiniCard
              isCurrency
              value={data?.totalVolume}
              heading='24h Volume'
              percentage='-'
            />
            <MiniCard
              value={data?.activeCryptos}
              heading='Total cryptocurrencies'
            />
            <MiniCard
              value={`${data?.bitcoinDominance.toFixed(1)}%`}
              heading='Bitcoin dominance'
            />
          </>
        ) : (
          <>
            <Skeleton className='w-250 h-166' />
            <Skeleton className='w-250 h-166' />
            <Skeleton className='w-250 h-124' />
            <Skeleton className='w-250 h-124' />
          </>
        )}
      </CardContent>
    </Card>
  )
}

const MiniCard = ({
  value,
  percentage,
  heading,
  isCurrency = false
}: {
  value?: string | number,
  percentage?: string,
  heading?: string,
  isCurrency?: boolean
}) => (
  <div className='flex flex-col items-center justify-center w-250 border rounded-md px-32 py-24 gap-8'>
    <h4 className='w-max text-muted-foreground'>{heading}</h4>
    <span className='text-h4 flex items-center'>
      {isCurrency && <CgDollar />}
      {value}
    </span>
    {!!percentage && (
      <div className='rounded-sm bg-card-accent text-card-accent-foreground px-10 py-5 text-16-caption'>
        {percentage}
      </div>
    )}
  </div>
)