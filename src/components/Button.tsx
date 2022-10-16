import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function Button(props: ButtonProps) {
  const Component = props.asChild ? Slot : 'button'

  return (
    <Component
      className="px-4 py-2 rounded bg-violet-500 text-white font-bold"
      {...props}
    />
  )
}
