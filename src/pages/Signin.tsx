import { FormEvent, useState } from "react";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function Signin() {
  const [isUserSignIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event:FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'email@email.com',
      password: '01234567',
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100">
      <header className='flex flex-col items-center mb-10'>
        <Logo className='mb-4' />
        <Heading size='lg' className='mb-2'>Ignite Lab #03</Heading>
        <Text size='lg' className='text-grey-400'>Faça login e comece a usar!</Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mb-6' onSubmit={handleSignIn}>
        { isUserSignIn && <Text>Login realizado!</Text> }

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' placeholder='********' />
          </TextInput.Root>
        </label>
        <label htmlFor='remeber' className='flex items-center gap-2 mb-8'>
          <Checkbox id='remeber' ariaLabel='checkbox' />
          <Text size='sm' className='text-grey-200'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type='submit' aria-label='Entrar na plataforma'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4'>
        <Text asChild size='sm'>
          <a href="#" className="text-grey-400 underline hover:text-grey-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="#" className="text-grey-400 underline hover:text-grey-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}