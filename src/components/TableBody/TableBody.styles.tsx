import styled from "styled-components";

export const Body = styled.tbody`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;

    @media screen and (min-width: 1024px) {
        display: table-row-group;
    }
`