import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Empresas/Empresas.css"
import MenuLateral from "../../Components/MenuLateral";
import Modal from '../../Components/Modal';
import verMapa from "../Assets/verMapa.svg";
import deletar from "../Assets/Excluir.svg";
import Editar from "../Assets/Editar.svg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
//import MaisUm from "../../Pages/Assets/MaisUm.svg";


export default function Empresas() {

    const [ListaEmpresas, atualizaListaEmpresas] = useState([])
    const [nomeEmpresa, atualizaNomeEmpresa] = useState('')
    const [nomeEmpresaCadastrar, atualizaCadastro] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

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
                            <div className='div-input'>
                                <input className='input-pesq' type="text" placeholder='Pesquisar' />
                            </div>
                            <Modal/>
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
                                                <th className='cabec-empresa ver-map' id='teste'>Ver no Mapa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ListaEmpresas.map((empresa) => {
                                                    return (
                                                        <tr key={empresa.idEmpresa}>
                                                            <td className='essss'>{empresa.nomeEmpresa}</td>
                                                            <td id='tdImagem'><img src={Editar} id="editar" /><img src={deletar} /></td>
                                                            <td className='tdImagem'><img src={verMapa} /></td>
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