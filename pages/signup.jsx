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

  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Crie sua conta</Midtitle>
        </FormContainer>
        <Form onSubmit={handleSubmit(handleForm)} >
          <Input label="Nome" {...register('firstName')} error={errors.firstName} />
          <Input label="Sobrenome" {...register('lastName')} error={errors.lastName} />
          <Input label="Usuário" {...register('user')} error={errors.user} />
          <Input label="Email" type="email" {...register('email')} error={errors.email} />
          <Input label="Senha" type="password" {...register('password')} error={errors.password} />
          <Button type="submit"  disabled={Object.keys(errors).length > 0} >Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu Login</Link></Text>
        </Image>
  )
}

export default Signup