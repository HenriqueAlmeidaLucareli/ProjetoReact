import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';
import type { Colaborador } from './componentes/formulario/formulario';
import Time from './componentes/time/time';
import Rodape from './componentes/rodape/rodape';

function App() { //componente

    const times = [
      {
        nome:"Programação", 
        corSecundaria: "#57C278", 
        corPrimaria: "#D9F7E9"
      },
      {
        nome:"Front-End", 
        corSecundaria: "#82CFFA", 
        corPrimaria: "#E8F8FF"
      },
      {
        nome: "Data Science", 
        corSecundaria: "#A6D157", 
        corPrimaria: "#F0F8E2"
      },
      {
        nome: "Devops", 
        corSecundaria: "#E06B69", 
        corPrimaria: "#FDE7E8"
      },
      {
        nome: "UX e Design", 
        corSecundaria: "#DB6EBF", 
        corPrimaria: "#FAE9F5"
      },
      {
        nome: "Mobile", 
        corSecundaria: "#FFBA05", 
        corPrimaria: "#FFF5D9"
      },
      {
        nome: "Inovação e Gestão", 
        corSecundaria: "#FF8A29", 
        corPrimaria: "#FFEEDF"
      },
    ];

  const [colaboradores,setColaboradores] = useState<Colaborador[]>([]);

  const aoNovoColaboradorAdicionado = (colaborador: Colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
