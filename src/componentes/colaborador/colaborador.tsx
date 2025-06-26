import * as S from "./styles";

type ColaboradorProps = {
  nome: string;
  cargo: string;
  imagem: string;
  corPrimaria: string;
  corSecundaria: string;
}

const Colaboradores = ({nome,cargo,imagem,corSecundaria}:ColaboradorProps) => {
  return (
    <S.Div>
        <S.Header $corSecundaria={corSecundaria} >
            <S.Imagem src={imagem} alt={nome} />
        </S.Header>
        <S.Texto>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </S.Texto>
    </S.Div>
  )
}


export default Colaboradores;