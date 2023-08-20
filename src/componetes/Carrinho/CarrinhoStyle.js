import { styled } from "styled-components";

export const Container = styled.div`
    width: 205px;
    height: ${props => props.ativo ? '400px' : '35px'};
    background-color: rgb(11,103,11);
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right:30px;
    border-top-right-radius: 10px;
    border-top-left-radius:10px ;
    cursor: pointer;
    transition: all ease-in-out .2s;
`;

export const CartHeader = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10px;
`;




export const CartBody = styled.div``;