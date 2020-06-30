import styled from 'styled-components'

export const ButtonContainer = styled.button`
border: 1px solid;
border-color:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
background:transparent;
color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 5px;
cursor:pointer;

:hover& {
    background: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline:none;
}
`
