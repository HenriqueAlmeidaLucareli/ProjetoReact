import React, { ReactNode } from 'react';
import './botao.css';

type BotaoProps = {
  children: ReactNode;
}

const Botao = ({ children }: BotaoProps) => {
  return (
    <button className='botao'>
      {children}
    </button>
  );
}

export default Botao;
