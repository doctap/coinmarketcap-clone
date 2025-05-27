import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export function Input({ className, ...otherProps }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'rounded-md focus:border p-5',
        className
      )}
      {...otherProps}
    />
  )
}
