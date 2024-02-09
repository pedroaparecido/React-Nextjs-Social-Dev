import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from "next/router"

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
  const [show, setShow] = useState(false)
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      setShow(true)
      if (status === 200) setTimeout(() => {{
        router.push('/')
      }}, 5000)
    } catch (err) {
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  }

  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Crie sua conta</Midtitle>
        </FormContainer>
        <Form onSubmit={handleSubmit(handleForm)} >
          <Input label="Nome" name="firstName" control={control} />
          <Input label="Sobrenome" name="lastName" control={control} />
          <Input label="Usuário" name="user" control={control} />
          <Input label="Email" type="email" name="email" control={control} />
          <Input label="Senha" type="password" name="password" control={control} />
          <Button Loading={show} type="submit"  disabled={Object.keys(errors).length > 0} >Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu Login</Link></Text>
        </Image>
  )
}

export default Signup