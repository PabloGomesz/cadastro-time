import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspena/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const Salvar = (evento) =>{
        evento.preventDefault()
        props.JogadorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
         })

         setNome('')
         setCargo('')
         setImagem('')
         setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={Salvar}>
                <h2>Preencha os Dados do Card de Equipe</h2>
                <CampoTexto 
                    obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} Alterado={valor => setNome(valor)}/>
                <CampoTexto 
                    obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} Alterado={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} Alterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                obrigatorio={true} label="Posição" itens={props.times} valor={time} Alterado={valor => setTime(valor)}/>
               <Botao>
                    Criar Card
               </Botao>
            </form>
        </section>
    )
}


export default Formulario