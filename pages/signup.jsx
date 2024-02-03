import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from "../modules/user/user.schema"

import Image from "../src/components/layout/Image"
import Input from "../src/components/inputs/Input"
import Subtitle from "../src/components/typography/Subtitle"
import Button from "../src/components/inputs/Button"
import Title from "../src/components/typography/Title"
import Midtitle from "../src/components/typography/Midtitle"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function Signup () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }

  console.log(errors)

  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Crie sua conta</Midtitle>
        </FormContainer>
        <Form onSubmit={handleSubmit(handleForm)} >
          <Input label="Nome" {...register('firstName')} />
          <Input label="Sobrenome" {...register('lastName')} />
          <Input label="Usuário" {...register('user')} />
          <Input label="Email" type="email" {...register('email')} />
          <Input label="Senha" type="password" {...register('password')} />
          <Button type="submit" >Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu Login</Link></Text>
        </Image>
  )
}

export default Signup