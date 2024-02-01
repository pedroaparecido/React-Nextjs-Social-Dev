import styled from "styled-components";

import Subtitle from '../typography/Subtitle'
import TextArea from "../inputs/TextArea";
import Button from '../inputs/Button'

const  PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px 40px;

    @media (max-width: 500px) {
        padding: 20px;
    }
`

const Title = styled.div`
    font-weight: bold;
    text-align: center;
`

const TextContainer = styled.div`
    margin: 20px 0;
    width: 100%;
`

const BottomContainer = styled.div`
    display: flex;
    align-itens: center;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        gap: 5px;
    }
`

const BottomText = styled.p`
    flex: 1;
`

function CreatePost() {
    return(
        <PostContainer>
            <Subtitle><Title>No que você está pensando, @nick?</Title></Subtitle>
            <TextContainer>
                <TextArea placeholder="Digite sua mensagem" rows="4" />
            </TextContainer>
            <BottomContainer>
                <BottomText>A sua mensagem será pública.</BottomText>
                <Button>Enviar mensagem</Button>
            </BottomContainer>
        </PostContainer>
    )
}

export default CreatePost