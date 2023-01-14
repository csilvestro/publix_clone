import styled from "styled-components";

export default styled.button`
    background-color: ${props => props.theme.colors.primrose};
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    border: none;
    border-radius: 5px;
    padding: 10px;
`