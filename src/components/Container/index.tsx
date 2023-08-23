import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerProps = ComponentProps<'div'> & {
  children?: ReactNode
}

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={twMerge('flex flex-col flex-1', className)} {...props}>
      {props.children}
    </div>
  )
}
