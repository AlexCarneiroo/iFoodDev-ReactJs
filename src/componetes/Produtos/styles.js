import { styled } from "styled-components";



export const mods = styled.div`
    position: relative;

`;
export const Container = styled.div`
    width: 320px;
    height: 100px;
    display: flex;
    background-color: white;
    margin: 10px 30px 10px 0;
    border-radius: 5px;
    cursor: pointer;
    
`;

export const ProdutsArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ProdutsImage = styled.img`
    width: 100%;
    max-width: 110px;
    height: auto;
    border-radius: 5px;
    margin: 5px;

`;
export const ProdutsDetalhes = styled.div``;
export const ProdutsNext = styled.img`
    width: 100%;
    max-width: 30px;
    height: 30px;
`;

export const detalhes = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
`;

export const modal = styled.div`
    width: 500px;
    height: 500px;
`;



