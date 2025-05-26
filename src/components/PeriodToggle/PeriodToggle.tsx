import { monthPeriods } from "@/enums"
import { ToggleGroup, ToggleGroupItem } from "@/shared"
import { memo } from "react"

const PeriodToggle = memo(function PeriodToggle({
  value,
  onChange
 }: { value: string, onChange: (value: string) => void }) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={onChange}
    >
      {monthPeriods.map(period => (
        <ToggleGroupItem
          key={period}
          value={String(period)}
          aria-label={`Toggle last ${period} days`}
          className='h-40 w-40'
        >
          {`${period}D`}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
})

export default PeriodToggle