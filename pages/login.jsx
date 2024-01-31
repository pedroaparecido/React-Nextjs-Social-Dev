import styled from "styled-components"

import Image from "./src/components/layout/Image"
import InputEmail from "./src/components/InputEmail"
import InputPassword from "./src/components/InputPassword"
import Subtitle from "./src/components/typography/Subtitle"
import Button from "./src/components/Button"
import Title from "./src/components/typography/Title"
import Midtitle from "./src/components/typography/Midtitle"

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
          <InputEmail placeHolder="Email" />
          <InputPassword placeHolder="Senha" />
          <Button>Entrar</Button>
        </Form>
        <Text>Não possui uma conta? <a href="#">Faça seu cadastro</a></Text>
        </Image>
  )
}

export default Login