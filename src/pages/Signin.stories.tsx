import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { rest } from 'msw'
import { Signin } from './Signin'

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ],
    }
  }
} as Meta

export const Default:StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'email@email.com')
    userEvent.type(canvas.getByPlaceholderText('********'), '01234567')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}