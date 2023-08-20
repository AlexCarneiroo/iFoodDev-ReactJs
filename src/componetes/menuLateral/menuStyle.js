import { styled } from "styled-components";


export const Container = styled.div`
    background-color: rgb(11,103,11);
    width: 70px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    
`;

export const Caixas = styled.div`
    width: 60px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    border-radius: 15px;
    background-color: ${props => props.ativo ? '#0B4D0B' : 'transparent'};


    &:hover{
        background-color: #0B4D0B;
    }

`
export const img = styled.img`
    width: 40px;
    height: auto;
`;