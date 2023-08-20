import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #0b670b;
    border-radius: 10px;
    margin-bottom:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;


export const imgLogo = styled.img`
    width: 240px;
    height: auto;
`;

export const Serch = styled.div`
    width: ${props => props.action ? '200px' : '35px'};
    height: 35px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 16px;
    padding: 0 10px;
    cursor: pointer;
    transition: all .1ms ease-in-out;
`;

export const input = styled.input`
    border: none;
    height: 90%;
    outline: none;
    margin-right: 5px;
    font-size: .7rem;
    transition: all .4s ease-in-out;
    font-weight: bold;
`;

export const logosearch = styled.img`
    width: 20px;
`;