import { SiMarko } from "react-icons/si";

export function Logo() {
  return (
    <div className='flex items-center gap-16 text-white'>
      <div className="flex justify-center items-center w-50 h-50 rounded-xl bg-purple-light">
        <SiMarko size={35} />
      </div>
      <div className='text-20-caption-bold'>Marker</div>
    </div>
  )
}
