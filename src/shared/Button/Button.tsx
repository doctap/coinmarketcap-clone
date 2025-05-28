import clsx from "clsx";
import { PropsWithChildren, ButtonHTMLAttributes } from "react";

type NativeProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonProps extends NativeProps {
  variant: 'outline'
  size: 'icon'
}

export function Button({ children, className, ...otherProps }: ButtonProps) {

  return (
    <button
      className={clsx('text-btn-foreground', className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
