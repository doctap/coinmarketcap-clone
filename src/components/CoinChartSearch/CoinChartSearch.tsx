import NextImage from "next/image"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../Command/Command"
import { memo, useCallback } from "react"

export interface CoinSearchSelectItem {
  id: string;
  name: string;
  image: string;
}

export const CoinSearchSelect = memo(function CoinSearchSelect({
  coins,
  onChange,
  value
}: {
  coins?: CoinSearchSelectItem[],
  onChange: (value: string) => void,
  value: string
}) {
  const handleItemSelect = useCallback(onChange, [onChange])

  return (
    <Command value={value} className="p-10">
      <CommandInput className='py-20 pl-5 text-20' placeholder="Type a coin..." />
      <CommandList>

        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Coins">

          <div className='flex flex-col space-y-10 mt-5'>
            {coins?.map(({ id, name, image }) => (
            <CommandItem
              key={id}
              value={id}
              onSelect={handleItemSelect}
              className='gap-10 p-5'
            >
              <NextImage
                src={image}
                width={20}
                height={20}
                alt={name}
              />
              {name}
            </CommandItem>
          ))}
          </div>
        </CommandGroup>

      </CommandList>
    </Command>
  )
})
