import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"
import { useRouter } from "next/router"

import { loginSchema } from "../modules/user/user.schema"

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

function Login () {
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(loginSchema)
  })
  
  const onSubmit = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    } catch ({ response }) {
      if (response.data === 'incorrect password') {
        setError('password', {
          message: 'A senha está incorreta.'
        })
      }
      else if (response.data === 'not found') {
        setError('userOrEmail', {
          message: 'Usuário ou email não encontrado.'
        })
      }
    }
  }

  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Entre em sua conta</Midtitle>
        </FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" name="userOrEmail" control={control} />
          <Input label="Senha" type="password" name="password" control={control} />
          <Button type="submit"  disabled={Object.keys(errors).length > 0}>Entrar</Button>
        </Form>
        <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro</Link></Text>
        </Image>
  )
}

export default Login