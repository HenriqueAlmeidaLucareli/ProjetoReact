import styled from "styled-components";

export const Rodape = styled.div`
    background-color: #6278f7;
    background-image: url('./imagens/fundo.png');
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`;

export const Redes = styled.div`
   display: flex;
   gap: 25px;
   width: 90px;
   height: 100%;
   img {
        width: 30px;
        height: 30px;
   }
`;

export const Organo = styled.div`
    display: flex;
    justify-content: center;
`;

export const Texto = styled.div`
   display: flex;
    justify-content: flex-end;
    color: white;
    h3 {
        font-size: 15px;
        font-weight: 500;
    }
`;