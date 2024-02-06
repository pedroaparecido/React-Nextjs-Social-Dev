import styled from "styled-components";
import moment from "moment"

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

function Post({ text, user, date }) {
    return(
        <PostContainer>
            <StylesUsername>@{user}</StylesUsername>
            <StyleDate>{moment(date).format('LLL')}</StyleDate>
            <ContainerText>{text}</ContainerText>
        </PostContainer>
    )
}

export default Post