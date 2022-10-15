import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }:TextInputRootProps) {
  return (
    <div className={clsx(
      `flex items-center gap-3 
      h-12 py-4 px-3 rounded w-full 
      transition-colors group
      bg-grey-800 
      hover:bg-cyan-500 hover:text-grey-800 
      focus-within:ring-2 ring-cyan-500`
    )}>
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }:TextInputIconProps) {
  return (
    <Slot className='h-6 w-6 text-grey-400 group-hover:text-grey-800 group-focus-within:hidden'>{children}</Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props:TextInputInputProps) {
  return (
    <input className={
      `flex-1 outline-none 
      bg-transparent text-xs text-grey-100
      group-hover:text-grey-800 group-hover:placeholder:text-grey-800`
    } {...props} />
  )
}

export const TextInput = {
  Icon: TextInputIcon,
  Input: TextInputInput,
  Root: TextInputRoot,
}