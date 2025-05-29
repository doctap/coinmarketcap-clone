'use client'

import { useCategoriesQuery, useExchangeQuery } from "@/hooks";
import { Card, CardContent, CardTitle, Skeleton } from "@/shared";
import { ExtraProps } from "@/types";
import { BiCategoryAlt } from "react-icons/bi";
import { RiExchange2Line } from "react-icons/ri";
import NextImage from "next/image";
import { IconType } from "react-icons/lib";
import { PropsWithChildren } from "react";

export const MarketHighlights = ({ className }: ExtraProps) => {
  const { data: exchanges, isLoading: isExchangesLoading } = useExchangeQuery(5)
  const { data: categories, isLoading: isCategoryLoading } = useCategoriesQuery(3)

  return (
    <Card className={className}>
      <CardTitle className='mb-24 text-center'>Market highlights</CardTitle>
      <CardContent className='flex flex-wrap gap-24 justify-center'>
        <HighlightItem
          loading={isExchangesLoading}
          Icon={RiExchange2Line}
          span='Top exchanges'
        >
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
        </HighlightItem>

        <HighlightItem
          loading={isCategoryLoading}
          Icon={BiCategoryAlt}
          span='Top categories'
        >
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
        </HighlightItem>
      </CardContent>
    </Card>
  )
}

const HighlightItem = ({
  loading,
  Icon,
  span,
  children
}: {
  loading: boolean,
  Icon: IconType,
  span: string
} & PropsWithChildren) => (
  loading ? (
    <Skeleton className='w-full h-50' />
  ) : (
    <aside className='flex gap-24 justify-between'>
      <h5 className='text-16-caption-bold min-w-max flex gap-8'>
        <Icon size={25} className='rounded-sm bg-card-accent text-card-accent-foreground p-3' />
        <span>{span}</span>
      </h5>
      {children}
    </aside>
  )
)
