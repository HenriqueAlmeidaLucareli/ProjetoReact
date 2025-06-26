import * as S from "./styles";

const Rodape = () => {
    return (
        <S.Rodape>
            <S.Redes>
                <img src="./imagens/fb.png" alt="facebook" />
                <img src="./imagens/ig.png" alt="instagram" />
                <img src="./imagens/tw.png" alt="twitter" />
            </S.Redes>
            <S.Organo>
                <img src="./imagens/logo.png" alt="Logo" />
            </S.Organo>
            <S.Texto>
                <h3>Desenvolvido por Alura</h3>
            </S.Texto>
        </S.Rodape>
    )
}

export default Rodape;