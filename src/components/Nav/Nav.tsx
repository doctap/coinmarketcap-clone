import { Link } from "@/components"
import { Href } from "@/types"

const links: { name: string, href: Href }[] = [
  { name: 'Home', href: '/' },
  { name: 'Payment', href: '/payment' },
]

export const Nav = () => {
  return (
    <nav className='flex justify-between'>
      <ul className='flex gap-20 items-center'>
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link color='accent' href={href} title={name} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
