import Image from "../components/Image"
import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import Subtitle from "../components/Subtitle"
import Button from "../components/Button"
import Title from "../components/Title"

function Login () {
  
  return (
    <div>
      <div>
        <Image />
      </div>
      <div>
        <Title>Titulo</Title>
        <Subtitle>Subtitulo</Subtitle>
        <InputEmail placeHolder="Email" />
        <InputPassword placeHolder="Senha" />
        <Button>Entrar</Button>
      </div>
    </div>
  )
}

export default Login