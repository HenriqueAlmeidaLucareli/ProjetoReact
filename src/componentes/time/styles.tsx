import styled from "styled-components";

type SectionProps = {
  $corPrimaria: string;
  $corSecundaria: string;
};

export const Section = styled.section<SectionProps>`
    text-align: center;
    padding: 32px;
    background-color:  ${({ $corPrimaria }) => $corPrimaria};
    h3{
        font-size: 32px;
        border-bottom: 2px solid  ${({ $corSecundaria }) => $corSecundaria};
        display: inline-block;
        padding-bottom: 8px;
    }
`
export const Colaboradores = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  flex-wrap: wrap;
`;