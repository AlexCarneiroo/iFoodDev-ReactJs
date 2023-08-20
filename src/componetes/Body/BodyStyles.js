import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Categorias = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const Cates = styled.div`
    width: 60px;
    background-color:rgba(250, 250, 250 , .7);
    border-radius: 10px;
    margin-right: 15px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        background-color: rgb(245, 245, 245);
    }
`;


export const Produtos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

`;