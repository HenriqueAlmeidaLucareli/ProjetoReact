import { useState } from "react";
import * as S from "./styles";

type CampoTextoProps = {
  label: string;
  placeholder: string;
  obrigatorio: boolean;
  aoAlterado: (valor: string) => void;
  valor: string;
};

const CampoTexto = ({
  label,
  placeholder,
  obrigatorio,
  aoAlterado,
  valor,
}: CampoTextoProps) => {
  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <S.CampoTextoContainer>
      <S.Label>{label}</S.Label>
      <S.Input
        onChange={aoDigitar}
        required={obrigatorio}
        type="text"
        placeholder={placeholder}
        value={valor}
      />
    </S.CampoTextoContainer>
  );
};

export default CampoTexto;
