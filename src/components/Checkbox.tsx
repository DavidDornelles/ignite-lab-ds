import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  ariaLabel?: string;
}

export function Checkbox({ ariaLabel, ...props}:CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className='h-6 w-6 p-[2px] bg-grey-800 rounded hover:bg-cyan-300 focus:ring-1 ring-cyan-500' {...props}>
      <CheckboxPrimitive.Indicator aria-label={ariaLabel} asChild>
        <Check className='h-5 w-5 text-cyan-500' weight='bold' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}