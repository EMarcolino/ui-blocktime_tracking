import React from "react";
import matheus from "../Pages/Assets/FotoPerfil.jpeg";
import mapaBranco from "../Pages/Assets/MapIconWhite.svg";
import perfilLaranja from "../Pages/Assets/perfilBranco.svg";
import noteLaranja from "../Pages/Assets/NoteIconOrange.svg";
import InterLaranja from "../Pages/Assets/InterIconOrange.svg";
import sairLaranja from "../Pages/Assets/icon-sair.svg";
import Empresas from '../Pages/Empresas/Empresas.jsx';
import { Link } from "react-router-dom";
// import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js';
// import editar from "../Pages/Assets/Editar.svg";
// import deletar from "../Pages/Assets/Excluir.svg";
// import verNoMapa from "../Pages/Assets/verMapa.svg";

export default function MenuLateral() {
  return (
    <div>
        <aside id="mn" className="PainelAdmin">
            <div className="PrinAside">
                <div className="partcima">
                    <div className='partFoto'>
                        <img className="FotoPerfil" src={matheus} alt="" srcSet="" />
                        <span id="pessoa">Olá, Matheus Gonçalves</span>
                    </div>
                    <nav className="navigationPainel">
                        <Link to="/MapaEquipamento">
                            <div className="cardSec selecionado">
                                <div>
                                    <img src={mapaBranco} alt="" srcSet="" />
                                </div>
                                <span>Map. Geral</span>
                            </div>
                        </Link>
                        <Link to="/Empresas">
                            <div className="cardSec">
                                <div>
                                    <img src={InterLaranja} alt="" srcSet="" />
                                </div>
                                <span>Map. Empresa</span>
                            </div>
                        </Link>
                    </nav>
                </div>
                <nav className="navigatio2">
                    <a className="Sair" href="/">
                        <div className="desisto">
                            <div >
                                <img src={sairLaranja} alt="" srcSet="" />
                            </div>
                            <span>Sair</span>
                        </div>
                    </a>
                </nav>
            </div>
        </aside>
    </div>
  );
}

