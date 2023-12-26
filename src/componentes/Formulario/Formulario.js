import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';

function Formulario (props){


    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')


    const fcn_salvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
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

    return(
            <section className="formulario">
                <form onSubmit={fcn_salvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                    <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                    <CampoTexto label="Imagem" placeholder="informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                    <ListaSuspensa obrigatorio={true} label='Time' itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                    <Botao >
                        Criar card
                    </Botao>
                </form>
            </section>
    );
}

export default Formulario