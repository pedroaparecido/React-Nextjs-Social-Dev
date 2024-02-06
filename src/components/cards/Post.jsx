import styled from "styled-components";
import moment from "moment"
import Menu from "../navigation/Menu";

const PostContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 20px;
    border-radius: 10px;
`

const StylesUsername = styled.p`
    font-weight: bold;
    font-size: 18px;
`

const StyleDate = styled.p`
    font-size: 12px;
`

const ContainerText = styled.div`
    margin-top: 20px;
`

const ContainerMenu = styled.div`
    float: right;
`

function Post({ text, user, date }) {
    const handleEdit = () => {
        console.log('editar publicação')
    }

    const handleDelete = () => {
        console.log('deletar publicação')
    }

    return(
        <PostContainer>
            <ContainerMenu>
                <Menu options={[{
                    text: 'Editar publicação',
                    onclick: handleEdit
                },
                {
                    text: 'Deletar publicação',
                    onclick: handleDelete
                }
                ]} />
            </ContainerMenu>
            <StylesUsername>@{user}</StylesUsername>
            <StyleDate>{moment(date).format('LLL')}</StyleDate>
            <ContainerText>{text}</ContainerText>
        </PostContainer>
    )
}

export default Post