"use client";

import { ColumnDef, SortDirection } from "@tanstack/react-table";
import NextImage from 'next/image'
import { CoinTableProps } from "../CoinsTableDialog/CoinsTableDialog";
import { Button, UpDownIndicator } from "@/shared";
import { LuArrowUpDown, LuArrowUp, LuArrowDown } from "react-icons/lu";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { GrTooltip } from "react-icons/gr";

const SortBtn = ({
  value,
  onClick,
  children
}: PropsWithChildren & { value: false | SortDirection, onClick: () => void }) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={clsx('font-bold !p-0', value !== false && 'text-accent-foreground')}
  >
    {children}
    {value === false && <LuArrowUpDown className='size-16' />}
    {value === 'asc' && <LuArrowDown className='size-16' />}
    {value === 'desc' && <LuArrowUp className='size-16' />}
  </Button >
)

export const columns: ColumnDef<CoinTableProps>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Name
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const isTooLongText = original.name.length > 26

      return (
        // 'min-w-300 max-w-300' styles work with 'isTooLongText' together
        <div className="relative font-medium flex items-center gap-10 min-w-250 max-w-250">
          <NextImage
            src={original.image}
            height={20}
            width={20}
            alt={original.name}
          />
          <span className='truncate'>
            {original.name}
            {isTooLongText && <GrTooltip className='size-12 absolute -right-3 top-0' />}
          </span>
          {isTooLongText && (
            <span className="hover:opacity-100 rounded-sm px-5 absolute opacity-0 bg-muted left-25">
              {original.name}
            </span>
          )}
        </div>
      )
    }
  },
  {
    accessorKey: "currentPrice",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Price
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(original.currentPrice)

      return (
        <div className="flex items-center font-geist-mono text-muted-foreground">
          {price}
        </div>
      )
    }
  },
  {
    accessorKey: "totalVolume",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Volume
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      }).format(original.totalVolume)

      return (
        <div className="flex items-center font-geist-mono text-muted-foreground">
          {price}
        </div>
      )
    }
  },
  {
    accessorKey: "marketRank",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Rank
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      return (
        <div className="font-geist-mono pl-20">
          {original.marketRank}
        </div>
      )
    }
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Cap
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      }).format(original.marketCap)

      return (
        <div className="flex items-center font-geist-mono text-muted-foreground">
          {price}
        </div>
      )
    }
  },
  {
    accessorKey: "priceChangePercentageLastDay",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Change
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      return (
        <UpDownIndicator
          className='font-geist-mono text-right pr-15'
          value={`${original.priceChangePercentageLastDay.toFixed(2)} %`}
          isUp={original.priceChangePercentageLastDay < 0}
        />
      )
    }
  },
  {
    accessorKey: "highIn24",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Highest price
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(original.highIn24)

      return (
        <div className="flex items-center font-geist-mono text-muted-foreground">
          {price}
        </div>
      )
    }
  },
  {
    accessorKey: "lowIn24",
    header: ({ column }) => (
      <SortBtn
        value={column.getIsSorted()}
        onClick={() => column.toggleSorting()}
      >
        Lowest price
      </SortBtn>
    ),
    cell: ({ row: { original } }) => {
      const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(original.lowIn24)

      return (
        <div className="flex items-center font-geist-mono text-muted-foreground">
          {price}
        </div>
      )
    }
  },
];
