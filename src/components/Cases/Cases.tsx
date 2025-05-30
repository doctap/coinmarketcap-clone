'use client'

import { PropsWithChildren } from "react"

export const Cases = ({
  isLoading,
  isError,
  error,
  skeletons,
  children
}: PropsWithChildren & {
  isLoading: boolean,
  isError: boolean,
  error: Error | null,
  skeletons: PropsWithChildren['children']
}) => {

  if (isError) {
    return (
      <div className='text-destructive'>
        Error: {error?.message || 'An error occurred'}
      </div>
    )
  }

  if (isLoading) {
    return skeletons
  }

  return children
}
