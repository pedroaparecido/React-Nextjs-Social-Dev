import styled from "styled-components"

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
  
  return (
        <Image>
        <Title># Social Dev</Title>
        <Subtitle>Tudo que acontece no mundo dev, está aqui!</Subtitle>
        <FormContainer>
          <Midtitle>Entre em sua conta</Midtitle>
        </FormContainer>
        <Form>
          <Input label="Email" type="email" />
          <Input label="Senha" type="password" />
          <Button>Entrar</Button>
        </Form>
        <Text>Não possui uma conta? <a href="#">Faça seu cadastro</a></Text>
        </Image>
  )
}

export default Login