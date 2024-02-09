import styled from "styled-components";
import { useForm } from "react-hook-form"
import { JoiReolver, joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"

import { createPostSchema } from '../../../modules/post/post.schema'

import Subtitle from '../typography/Subtitle'
import ControlledTextArea from "../inputs/ControlledTextArea";
import Button from '../inputs/Button'
import { useSWRConfig } from "swr";
import { useState } from "react";

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

function CreatePost({ username }) {
    const [show, setShow] = useState(false)
    const { mutate } = useSWRConfig()
    const { control, handleSubmit, formState: { isValid }, reset } = useForm({
        resolver: joiResolver(createPostSchema),
        mode: 'all'
    })
    
  const onSubmit = async (data) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
    if (response.status === 201) {
        setShow(true)
        try {
            if (response.status === 201) {
                setTimeout(() => {setShow(false)}, 1000)
            }
        } catch (err) {
            setShow(true)
        }
      reset()
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    }
  }
    
    return(
        <PostContainer>
            <Subtitle><Title>No que você está pensando, @{username}</Title></Subtitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextContainer>
                    <ControlledTextArea placeholder="Digite sua mensagem" rows="4" control={control} name="text" maxLength="256" />
                </TextContainer>
                <BottomContainer>
                    <BottomText>A sua mensagem será pública.</BottomText>
                    <Button Loading={show} disabled={!isValid}>Postar mensagem</Button>
                </BottomContainer>
            </form>
        </PostContainer>
    )
}

export default CreatePost