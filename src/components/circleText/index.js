import { React } from 'react';
import styled from "styled-components";


const Container = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 200px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    p{
        font-size: 30px;
        font-weight: lighter;
    }
`;
const CircleText = ({ text }) => {
    return (
        <Container>
            <p>{text}</p>
        </Container>

    );
};
export default CircleText;
