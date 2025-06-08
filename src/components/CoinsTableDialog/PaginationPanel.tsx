"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Button,
} from "@/shared"
import { PaginationState, Table } from "@tanstack/react-table"
import { FaAngleLeft } from "react-icons/fa6";

const pageSizes = ['4', '6', '8', '10']

export function PaginationPanel<TData>({
  pagination,
  table
}: { table: Table<TData>, pagination: PaginationState }) {
  return (
    <div className='flex items-center justify-between mt-24 gap-16'>
      <div className='flex space-x-7'>
        <Button
          variant='outline'
          onClick={() => table.resetSorting()}
          size='lg'
          className='font-semibold'
        >
          Reset sorting
        </Button>

        <Select onValueChange={(pageSize) => table.setPageSize(Number(pageSize))}>
          <SelectTrigger className="w-50 py-15 pl-10">
            <SelectValue placeholder={pagination.pageSize} />
          </SelectTrigger>
          <SelectContent className='min-w-fit'>
            {pageSizes.map(it => <SelectItem className='pl-10' key={it} value={it}>{it}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-7">
        <div className='text-14'>Page {pagination.pageIndex + 1} of {table.getPageCount()}</div>
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <FaAngleLeft size={30} className='size-15' />
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaAngleLeft className='rotate-180 size-15' />
        </Button>
      </div>
    </div>
  )
}
