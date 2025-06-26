import styled from "styled-components";

type SectionProps = {
  $corSecundaria: string;
};

export const Div = styled.div`
    width: 262px;
    height: 272px;
    background-color: white;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 16px auto;
    max-width: 262px;
    position: relative;
    
`;
export const Header = styled.div<SectionProps>`
    background-color: ${({ $corSecundaria }) => $corSecundaria};
    height: 80px;
    border-radius: 16px 16px 0 0;
`

export const Imagem = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin-top: 60px;

    h4{
        color: #00008B;
    }
    h5{
        margin: 0;
    }
`;