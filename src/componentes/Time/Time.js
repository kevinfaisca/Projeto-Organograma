import './Time.css'
import Colaborador from '../Colaborador/Colaborador'

const Time = (props) => {

    const h3Borda = {borderColor: props.corPrimaria}

    return (
        
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSegundaria}}>
            <h3 style={h3Borda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador =>  <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
    )

}

export default Time