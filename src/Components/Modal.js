import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";


export default function Modal() {
    const [modal, setModal] = useState(false);
    const [nomeEmpresa, atualizaNomeEmpresa] = useState('')
    const [nomeEmpresaCadastrar, atualizaCadastro] = useState('')

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    function Cadastrar(evento) {
        evento.preventDefault();
        axios.post('https://api-blocktimetracking.azurewebsites.net/Cadastrar/'.concat(nomeEmpresa), {
        }, {
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log('deubom');
                   
                }
            })
            .catch(erro => console.log(erro), setInterval(() => {
            }, 500000));
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Nova Empresa
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Cadastrar Empresa</h2>
                        <form onSubmit={() => Cadastrar()}>
                            <input 
                            id="nomeEmpresa"
                            name="nomeEmpresa"
                            value={nomeEmpresa}
                            onChange={(campo) => atualizaNomeEmpresa(campo.target.value)}
                            type="text" placeholder="Nome Empresa" />
                            <div className="btsModais">
                                <button className="btnFim" onClick={toggleModal}>
                                    Cancelar
                                </button>
                                <button className="btnFim" type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}