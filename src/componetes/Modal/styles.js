import { styled } from "styled-components";


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const detalhes = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: #EEEEEE;
    border-radius: 5px;
    padding: 20px 10px;

`;
export const modal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;


export const img = styled.img`
    width: 300px;
    height: auto;
    border-radius: 5px;
    margin-right: 15px;
`;
export const opcoes = styled.div`

`;

export const total = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

export const button = styled.button`
    border: 1px solid green;
    font-weight: bold;
    color: white;
    background-color:#0b670b;
    padding: 5px;
    border-radius: 5px;
    
`;