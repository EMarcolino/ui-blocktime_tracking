import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListItem } from 'css-tree';
import "../../Components/Modal.css";
import "../../Components/modal2.css";
import "../../Components/modal3.css";
import "../Empresas/Empresas.css"
import MenuLateral from "../../Components/MenuLateral3";
import verMapa from "../Assets/verMapa.svg";
import Deletar from "../Assets/Excluir.svg";
import Editar from "../Assets/Editar.svg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
//import MaisUm from "../../Pages/Assets/MaisUm.svg";


export default function Empresas() {

    const [ListaEquipamentos, atualizaListaEquipamentos] = useState([])
    const [ListaEmpresas, atualizaListaEmpresas] = useState([])
    const [nomeEmpresa, atualizaNomeEmpresa] = useState('')
    const [idEmpresa, atualizaIdEmpresa] = useState('')
    const [nomeEmpresaCadastrar, atualizaCadastro] = useState('')
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
        setModal3(!modal3);
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

    function deletar(idEmpresa) {
        axios.delete('https://api-blocktimetracking.azurewebsites.net/api/Empresas/' + idEmpresa, {})
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log("bei")
                    listarEmpresas();
                }
            })
            .catch(erro => console.log(erro));


    }

    function listarEquipamentos(key) {

        var empresa = ListaEmpresas[key]
        console.log('https://api-blocktimetracking.azurewebsites.net/api/Equipamentos/' + empresa.idEmpresa)
        axios('https://api-blocktimetracking.azurewebsites.net/api/Equipamentos/' + empresa.idEmpresa, {
        }).then(resposta => {
            if (resposta.status === 200) {
                atualizaListaEquipamentos(resposta.data)
            }
        })
            .catch(erro => console.log(erro));
    }

    function Cadastrar(evento) {
        evento.preventDefault();
        axios.post('https://api-blocktimetracking.azurewebsites.net/Cadastrar', {
            nomeEmpresa: nomeEmpresa
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

    function listarEmpresas() {
        axios('https://api-blocktimetracking.azurewebsites.net/api/Empresas', {
        }).then(resposta => {
            if (resposta.status === 200) {
                atualizaListaEmpresas(resposta.data)
            }
        })
            .catch(erro => console.log(erro));

    }
    useEffect(listarEmpresas, [])

    console.log(ListaEmpresas)

    return (
        <div>
            <Header />
            <div className='div-container'>
                <MenuLateral className="altura">

                </MenuLateral>
                <main className='main-content'>
                    <section className='sec-new-company'>
                        <div className='div-title'>
                            <h1 className='title'>Empresas</h1>
                        </div>

                        <div className='div-sheare-new-company'>
                            <button onClick={toggleModal2} className="btn-modal2">
                                Nova Empresa
                            </button>

                            {modal2 && (
                                <div className="modal2">
                                    <div onClick={toggleModal2} className="overlay2"></div>
                                    <div className="modal-content2">
                                        <h2>Cadastrar Empresa</h2>
                                        <form onSubmit={() => Cadastrar()}>
                                            <input
                                                id="nomeEmpresa"
                                                name="nomeEmpresa"
                                                value={nomeEmpresa}
                                                onChange={(campo) => atualizaNomeEmpresa(campo.target.value)}
                                                type="text" placeholder="Nome Empresa" />
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
                                                <th className='cabec-empresa'>Nome</th>
                                                <th className='cabec-empresa'>Editar Empresa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ListaEmpresas.map((empresa, key) => {
                                                    return (
                                                        <tr key={empresa.idEmpresa} >
                                                            <td className='essss' >{empresa.nomeEmpresa}
                                                                {modal3 && (
                                                                    <div className="modal3">
                                                                        <div key={empresa.idEmpresa} onClick={toggleModal3} className="overlay3"></div>
                                                                        <div className="modal-content3">
                                                                            <h2>Equipamentos</h2>
                                                                            <table>
                                                                                <thead>
                                                                                    <tr className='i'>
                                                                                        <th className='cabec-Equipamento'>Nome</th>
                                                                                        <th className='cabec-Equipamento'>Código Equipamento</th>
                                                                                        <th className='cabec-Equipamento'>Empresa</th>
                                                                                        <th className='cabec-Equipamento'>Última Atualização</th>
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
                                                                                                    <td className='essss'>{Equipamento.ultimaAtt.replace('T', ' | ')}</td>
                                                                                                </tr>
                                                                                            );
                                                                                        })
                                                                                    }
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="btsModais3">
                                                                                <button className="btnFim3" onClick={toggleModal3}>
                                                                                    Cancelar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td id='tdImagem'><img src={Editar} id="editar" /><a onClick={toggleModal}>
                                                                <img src={Deletar}></img>
                                                            </a>

                                                                {modal && (
                                                                    <div className="modal">
                                                                        <div onClick={toggleModal} className="overlay"></div>
                                                                        <div className="modal-content">
                                                                            <h2>Deletar Empresa</h2>
                                                                            <span>Deseja Excluir essa empresa?
                                                                                essa ação não pode ser desfeita</span>
                                                                            <div className="btsModais">
                                                                                <button className="btnFim" onClick={toggleModal}>
                                                                                    Cancelar
                                                                                </button>
                                                                                <button className="btnFim" onClick={deletar(empresa.idEmpresa), toggleModal}>Deletar</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}</td>
                                                        </tr>
                                                )      
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