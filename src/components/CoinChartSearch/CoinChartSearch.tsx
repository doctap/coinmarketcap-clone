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
      <CommandInput className='py-20 px-10 text-20' placeholder="Type a coin for search..." />
      <CommandList>

        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Coins">

          {coins?.map(({ id, name, image }) => (
            <CommandItem
              key={id}
              value={id}
              onSelect={handleItemSelect}
            >
              <NextImage
                src={image}
                width={30}
                height={30}
                alt={name}
              />
              {name}
            </CommandItem>
          ))}
        </CommandGroup>

      </CommandList>
    </Command>
  )
})
