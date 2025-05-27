"use client"

import { Area, AreaChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared"
import { Skeleton } from "@/shared"
import { CoinPricesProps } from "@/entities/coins"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function CoinChart({
  prices,
  isLoading
}: { prices?: CoinPricesProps, isLoading: boolean }) {

  if (isLoading) {
    return (
      <Skeleton className='h-250 w-full' />
    )
  }

  return (
    <ChartContainer className='h-250 w-full' config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={prices}
        margin={{ left: -5 }}
      >
        <YAxis
          type="number"
        />
        <XAxis
          dataKey='date'
          tickMargin={8}
          tickFormatter={(value) => value.slice(4, 10)}
        />
        <ChartTooltip
          cursor
          content={<ChartTooltipContent className='p-7' indicator="dot" />}
        />
        <Area
          dataKey='price'
          type="monotone"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
