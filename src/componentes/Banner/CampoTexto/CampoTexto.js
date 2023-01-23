
import './CampoTexto.css'


const CampoTexto = (props) =>{
    console.log(props.label)
   
    
   
    const Digitado = (evento) =>{
        props.Alterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}  onChange={Digitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto