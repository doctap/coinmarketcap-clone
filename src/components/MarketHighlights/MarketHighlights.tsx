'use client'

import { useCategoriesQuery, useExchangeQuery } from "@/hooks";
import { Card, CardContent, CardTitle, Skeleton } from "@/shared";
import { ExtraProps } from "@/types";
import { BiCategoryAlt } from "react-icons/bi";
import { RiExchange2Line } from "react-icons/ri";
import NextImage from "next/image";
import { Cases } from "../Cases/Cases";

export const MarketHighlights = ({ className }: ExtraProps) => {
  const {
    data: exchanges,
    isLoading: isExchangesLoading,
    error: exchangeError,
    isError: isExchangeError
  } = useExchangeQuery(5)
  const {
    data: categories,
    isLoading: isCategoryLoading,
    error: categoryError,
    isError: isCategoryError
  } = useCategoriesQuery(3)

  const skeleton = <Skeleton className='w-full h-50' />

  return (
    <Card className={className}>
      <CardTitle className='mb-24 text-center'>Market highlights</CardTitle>
      <CardContent className='flex flex-wrap gap-24 justify-center'>
        <Cases
          error={exchangeError}
          isError={isExchangeError}
          isLoading={isExchangesLoading}
          skeletons={skeleton}
        >
          <aside className='flex gap-24 justify-between'>
            <h5 className='text-16-caption-bold min-w-max flex gap-8'>
              <RiExchange2Line size={25} className='rounded-sm bg-card-accent text-card-accent-foreground p-3' />
              <span>Top exchanges</span>
            </h5>
            <ul className='flex flex-wrap gap-5'>
              {exchanges?.map(({ id, name, image, url }) => (
                <li
                  className='rounded-sm w-fit bg-card-accent text-card-accent-foreground px-5 py-3 text-14-caption'
                  key={id}
                >
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-5 items-center'
                  >
                    <div>
                      <NextImage
                        src={image}
                        alt={name}
                        width={16}
                        height={16}
                      />
                    </div>
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Cases>

        <Cases
          error={categoryError}
          isError={isCategoryError}
          isLoading={isCategoryLoading}
          skeletons={skeleton}
        >
          <aside className='flex gap-24 justify-between'>
            <h5 className='text-16-caption-bold min-w-max flex gap-8'>
              <BiCategoryAlt size={25} className='rounded-sm bg-card-accent text-card-accent-foreground p-3' />
              <span>Top categories</span>
            </h5>
            <ul className='flex flex-wrap gap-5 '>
              {categories?.map(({ id, name }) => (
                <li
                  className='rounded-sm w-fit bg-card-accent text-card-accent-foreground p-3 text-14-caption'
                  key={id}
                >
                  {name}
                </li>
              ))}
            </ul>
          </aside>
        </Cases>
      </CardContent>
    </Card>
  )
}
