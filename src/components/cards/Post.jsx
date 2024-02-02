import styled from "styled-components";

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

function Post() {
    return(
        <PostContainer>
            <StylesUsername>@username</StylesUsername>
            <StyleDate>01 de Janeiro de 2000</StyleDate>
            <ContainerText>Esse é um texto.</ContainerText>
        </PostContainer>
    )
}

export default Post