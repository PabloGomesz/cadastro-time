import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Banner/Formulario/Formulario';
import Rodape from './componentes/Banner/Rodape/Rodape';
import Time from './componentes/Banner/Time/Time';

function App() {
  

  const times = [
    {
      nome: 'Mid-laner',
      corPrimaria: '#57C278',
      //corSecundaria: '#D9F7E9'
    },

    {
      nome: 'Top-laner',
      corPrimaria: '#82CFFA',
      //corSecundaria: '#E8F8FF'
    },
    
    {
      nome: 'Jungle-laner',
      corPrimaria: '#A6D157',
      //corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Adc',
      corPrimaria: '#E06B69',
      //corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Suporte',
      corPrimaria: '#DB6EBF',
      //corSecundaria: '#FAE9F5'
    }

  ]
  
  const [jogadores, setJogadores] = useState([])

  const NovoJogador = (jogador) =>{
    
    setJogadores([...jogadores, jogador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} JogadorCadastrado={jogador => NovoJogador(jogador)}/>
      
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      jogadores={jogadores.filter(jogador => jogador.time == time.nome)}
      />)}
      
      <Rodape/>
      
      
      
    </div>
  );
}

export default App;
