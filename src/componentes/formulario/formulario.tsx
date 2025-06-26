import CampoTexto from "../CampoTexto/CampoTexto";
import "./formulario.css";
import Lista from "../lista/lista";
import Botao from "../botao/botao";
import React, { useState } from "react";

export type Colaborador = {
  nome: string;
  cargo: string;
  imagem: string;
  time: string;
};

type FormularioProps = {
  aoColaboradorCadastrado: (colaborador: Colaborador) => void;
  times: string[];
};

const Formulario = ({aoColaboradorCadastrado,times}:FormularioProps) => {

  const [nome, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento: React.FormEvent) => {
    evento.preventDefault();
    aoColaboradorCadastrado({nome,cargo,imagem,time});
    setName("");
    setCargo("");
    setImagem("");
    setTime("");   
  };

  return (
    <section className="formulario">
      <form onSubmit={(evento) => aoSalvar(evento)}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder={`Digite o seu Nome`}
          valor={nome}
          aoAlterado={setName}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder={`Digite o seu Cargo`}
          valor={cargo}
          aoAlterado={setCargo}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder={`Informe o endereço da imagem`}
          valor={imagem}
          aoAlterado={setImagem}
        />
        <Lista
          obrigatorio={true}
          label="Times"
          item={times}
          valor={time}
          aoAlterado={setTime}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
