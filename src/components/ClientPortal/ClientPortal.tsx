'use client'

import { useEffect, useRef, ReactNode, useState } from "react"
import { createPortal } from "react-dom"

type ClientPortalInterface = {
  children: ReactNode
  selector: string
}

const ClientPortal = ({ children, selector }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current!) : null
}

export default ClientPortal
