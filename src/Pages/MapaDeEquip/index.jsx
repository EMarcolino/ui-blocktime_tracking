import React, { useState, useEffect } from "react";
import MenuLateral from "../../Components/MenuLateral";
import matheus from "../Assets/FotoPerfil.jpeg";
import mapaBranco from "../Assets/MapIconWhite.svg";
import perfilLaranja from "../Assets/perfilBranco.svg";
import noteLaranja from "../Assets/NoteIconOrange.svg";
import InterLaranja from "../Assets/InterIconOrange.svg";
import sairLaranja from "../Assets/icon-sair.svg";
import './styles.css';


function Consulta() {
    function botaodomenu() {
        var menu = document.getElementById("mn");
        if (menu.style.display === "flex") {
            //Esconda o menu
            menu.style.display = "none"
        } else {
            //Mostre o menu
            menu.style.display = "flex"
        }
    }

    return (
            <>
            <header>
                <hr className="LinhaHeader" />
                <div className="TamanhoHeader">
                    <div className="grid alignLogo">
                        <input className="input" id="menu-hamburguer" type="checkbox" />

                        <label className="input" htmlFor="menu-hamburguer" onClick={botaodomenu}>
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>
                        <div className="LogoHeader">
                            <div className="LogoEscrito">
                                <span className="EscBlock">Blocktime</span>
                                <span className="Proj">Tracking</span>
                            </div>
                            <img src="https://blocktimecoworking.com.br/wp-content/uploads/2019/09/favicon_animado_2-1.gif" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <MenuLateral id="mn" className="PainelAdmin">    
                </MenuLateral>
                <div className="RealMain">
                    <div className="AjeitarMain">
                        <span>
                            Todos os Equipamentos
                        </span>
                        <div className="BackgroundMap">
                             <div id="map"/>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="LogoFooter">
                    <img src="https://blocktimecoworking.com.br/wp-content/uploads/2019/09/favicon_animado_2-1.gif" alt="" srcSet="" />
                    <div className="LogoEscrito2">
                        <span className="EscBlock">Blocktime</span>
                        <span className="Proj">Tracking</span>
                    </div>
                </div>
            </footer>
            </>

        


    )
}

export default Consulta;