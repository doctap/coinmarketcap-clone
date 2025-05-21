import clsx from "clsx";
import { PropsWithChildren, ButtonHTMLAttributes } from "react";

type NativeProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonProps extends NativeProps {
  variant: 'outline'
  size: 'icon'
}

export default function Button({ children, className, ...otherProps }: ButtonProps) {

  return (
    <button
      className={clsx(className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
