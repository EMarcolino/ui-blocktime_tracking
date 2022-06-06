import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Components/Modal.css";
import "../../Components/modal2.css";
import "../ListarEquipamentos/ListarEquipamentos.css"
import MenuLateral from "../../Components/MenuLateral";
import verMapa from "../Assets/verMapa.svg";
import Deletar from "../Assets/Excluir.svg";
import Editar from "../Assets/Editar.svg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
//import MaisUm from "../../Pages/Assets/MaisUm.svg";


export default function Equipamentos() {

    const [ListaEquipamentos, atualizaListaEquipamentos] = useState([])
    const [nomeEquipamento, atualizaNomeEquipamento] = useState('')
    const [idEquipamento, atualizaIdEquipamento] = useState('')
    const [nomeEquipamentoCadastrar, atualizaCadastro] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleModal2 = () => {
        setModal2(!modal);
    };

    const toggleModal3 = () => {
        setModal3(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    if (modal2) {
        document.body.classList.add('active-modal2')
    } else {
        document.body.classList.remove('active-modal2')
    }
    if (modal3) {
        document.body.classList.add('active-modal3')
    } else {
        document.body.classList.remove('active-modal3')
    }

    function deletar(idEquipamento) {
        axios.delete('https://api-blocktimetracking.azurewebsites.net/api/Equipamentos/' + idEquipamento, {})
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log("bei")
                    listarEquipamentos();
                }
            })
            .catch(erro => console.log(erro));

            
    }

    function Cadastrar(evento) {
        evento.preventDefault();
        axios.post('https://api-blocktimetracking.azurewebsites.net/Cadastrar', {
            nomeEquipamento : nomeEquipamento
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

    function listarEquipamentos() {
        axios('https://api-blocktimetracking.azurewebsites.net/api/Equipamentos', {
        }).then(resposta => {
            if (resposta.status === 200) {
                atualizaListaEquipamentos(resposta.data)
            }
        })
            .catch(erro => console.log(erro));

    }
    useEffect(listarEquipamentos, [])

    console.log(ListaEquipamentos)

    return (
        <div>
            <Header />
            <div className='div-container'>
                <MenuLateral className="altura">

                </MenuLateral>
                <main className='main-content'>
                    <section className='sec-new-company'>
                        <div className='div-title'>
                            <h1 className='title'>Equipamentos</h1>
                        </div>

                        <div className='div-sheare-new-company'>
                            <div className='div-input'>
                                <input className='input-pesq' type="text" placeholder='Pesquisar' />
                            </div>
                            <button onClick={toggleModal2} className="btn-modal2">
                                Novo Equipamento
                            </button>

                            {modal2 && (
                                <div className="modal2">
                                    <div onClick={toggleModal2} className="overlay2"></div>
                                    <div className="modal-content2">
                                        <h2>Cadastrar Equipamento</h2>
                                        <form onSubmit={() => Cadastrar()}>
                                            <input
                                                id="nomeEquipamento"
                                                name="nomeEquipamento"
                                                value={nomeEquipamento}
                                                onChange={(campo) => atualizaNomeEquipamento(campo.target.value)}
                                                type="text" placeholder="Nome Equipamento" />
                                            <div className="btsModais2">
                                                <button className="btnFim2" onClick={toggleModal2}>
                                                    Cancelar
                                                </button>
                                                <button className="btnFim2" type="submit" onClick={toggleModal2}>Cadastrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    <section className='sec-list'>
                        <div className="div-list">
                            <div className='table-list'>
                                <div className='s'>
                                    <table>
                                        <thead>
                                            <tr className='i'>
                                                <th className='cabec-Equipamento'>Nome</th>
                                                <th className='cabec-Equipamento'>Código Equipamento</th>
                                                <th className='cabec-Equipamento'>Empresa</th>
                                                <th className='cabec-Equipamento'>Editar Equipamento</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ListaEquipamentos.map((Equipamento) => {
                                                    return (
                                                        <tr key={Equipamento.idEquipamento}>
                                                            <td className='essss'>{Equipamento.nomeNotebook}</td>
                                                            <td className='essss'>{Equipamento.idEquipamento}</td>
                                                            <td className='essss'>{Equipamento.idEmpresaNavigation.nomeEmpresa}</td>
                                                            <td id='tdImagem'><img src={Editar} id="editar" /><a onClick={toggleModal}>
                                                                <img src={Deletar}></img>
                                                            </a>

                                                                {modal && (
                                                                    <div className="modal">
                                                                        <div onClick={toggleModal} className="overlay"></div>
                                                                        <div className="modal-content">
                                                                            <h2>Deletar Equipamento</h2>
                                                                            <span>Deseja Excluir essa Equipamento?
                                                                                essa ação não pode ser desfeita</span>
                                                                            <div className="btsModais">
                                                                                <button className="btnFim" onClick={toggleModal}>
                                                                                    Cancelar
                                                                                </button>
                                                                                <button className="btnFim" onClick={deletar(Equipamento.idEquipamento), toggleModal}>Deletar</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>

                                <div className='lid '>
                                    <div className='tabela-lista-corpo '>

                                    </div>
                                </div>
                                <div className='container-pagination'>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <Footer />


        </div>)
};