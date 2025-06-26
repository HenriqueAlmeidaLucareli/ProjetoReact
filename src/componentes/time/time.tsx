import Colaborador from "../colaborador/colaborador";
import * as S from "./styles";
import type { Colaborador as ColaboradorType } from "../formulario/formulario";

type TimeProps = {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: ColaboradorType[];
};

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
}: TimeProps) => {
  if (!Array.isArray(colaboradores) || colaboradores.length === 0) return null;

  return (
    <S.Section $corPrimaria={corPrimaria} $corSecundaria={corSecundaria}>
      <h3>{nome}</h3>
      <S.Colaboradores>
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria={corPrimaria} 
            corSecundaria={corSecundaria}
          />
        ))}
      </S.Colaboradores>
    </S.Section>
  );
};

export default Time;
