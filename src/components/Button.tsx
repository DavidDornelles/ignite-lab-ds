import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild }:ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={clsx(
      'py-4 px-3 bg-cyan-500 rounded font-semibold text-sm text-black w-full transition-colors focus:bg-cyan-300 focus:text-grey-800 focus:ring-2 focus:ring-cyan-500 hover:bg-grey-800 hover:text-cyan-500',
    )}>
      {children}
    </Comp>
  )
}