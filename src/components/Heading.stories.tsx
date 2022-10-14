import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading"

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
  }
} as Meta<HeadingProps>

export const Small:StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}
export const Default:StoryObj<HeadingProps> = {}
export const Large:StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}
export const CustomComponent:StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading</h1>
    )
  }
}