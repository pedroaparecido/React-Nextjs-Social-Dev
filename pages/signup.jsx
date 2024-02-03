import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = (event) => {
    event.preventDefault()
    console.log({
      firstName,
      lastName,
      user,
      email,
      password
    })
  }

  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Crie sua conta</Midtitle>
        </FormContainer>
        <Form onSubmit={handleForm} >
          <Input label="Nome" onChange={(event) => {setFirstName(event.target.value)}} />
          <Input label="Sobrenome" onChange={(event) => {setLastName(event.target.value)}} />
          <Input label="Usuário" onChange={(event) => {setUser(event.target.value)}} />
          <Input label="Email" type="email" onChange={(event) => {setEmail(event.target.value)}} />
          <Input label="Senha" type="password" onChange={(event) => {setPassword(event.target.value)}} />
          <Button>Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu Login</Link></Text>
        </Image>
  )
}

export default Signup