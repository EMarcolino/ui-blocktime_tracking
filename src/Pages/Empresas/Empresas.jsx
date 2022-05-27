import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../Empresas/Empresas.css"
import MenuLateral from "../../Components/MenuLateral";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
//import MaisUm from "../../Pages/Assets/MaisUm.svg";


export default function Empresas() {
    const [ListarEmpresas, setListarEmpresas] = useState([
        { idHostGroup: 1, hostname: 'SENAI-1', contato: '5555-5555', lat: '', log: '' },
        { idHostGroup: 2, hostname: 'SENAI-2', contato: '5555-5555', lat: '', log: '' }
    ]);

    //const [ isLoading, setIsLoading ] = useState( false );
    // const [ pages, fetchPages ] = usePages[3]; 
    // const [ actualPage, setActualPage] = usePagination();


    function buscarEmpresas() {
        axios(ListarEmpresas)
            // setIsLoading( true );
            // // Faz a chamada para a API usando axios
            // axios('http://localhost:5000/api/empresas', {
            //     headers : {
            //         'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            //     }
            // })

            // Caso a resposta da requisição retorne um status code 200
            .then(response => {
                if (response.status === 200) {
                    // Chama a função que atualiza o state listaTiposUsuarios
                    setListarEmpresas(response.data);
                    // setIsLoading( false );
                };
            })

            // Mostra no console do navegador
            .catch(error => console.log(error));
    };

    // useEffect( ListarEmpresas, [])

    return (
        <div>
            <Header />
            <div className='div-container'>
                    <MenuLateral>

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
                            <button className='btn'>
                                {/* <img className='img-btn' src={MaisUm} alt="" /> */}
                                Nova Empresa
                            </button>
                        </div>
                    </section>

                    <section className='sec-list'>
                        <div className="div-list">
                            <div className='table-list'>
                                <div className='s'>
                                    <tr className='i'>
                                        <th className='cabec-empresa'>Nome</th>
                                        {/* <th className='cabec-empresa'>Contato</th> */}
                                        <th className='cabec-empresa'>Editar</th>
                                        <th className='cabec-empresa ver-map'>Ver no mapa</th>
                                    </tr>
                                </div>

                                <div className='lid '>
                                    <div className='tabela-lista-corpo '>
                                        {/* <h3>Olá-2</h3> */}
                                        {
                                            ListarEmpresas.map((empresa) => {
                                                return (
                                                    <div className='test' key={empresa.idEmpresa}>
                                                        <div className='essss'>{empresa.hostname}</div>
                                                        {/* <div>{empresa.contato}</div> */}
                                                        {/* <td>
                                                                <img src="" alt="" />
                                                                <img src="" alt="" />
                                                            </td>
                                                            <td>
                                                                <img src="" alt="" />
                                                            </td>                                                         */}
                                                    </div>
                                                );
                                            })
                                        }
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
        </div>
    )
};