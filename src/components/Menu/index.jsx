import * as React from "react";
import Logo from "../../assets/logo.svg";
import * as Styled from "./style";
import Relatorio from "../../assets/relatorio.svg";
import Mapa from "../../assets/mapa.svg";
import Cadastrar from "../../assets/cadastrar.svg";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Styled.SideBar>
        <div className="menu-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-navigation">
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <button>
              <img src={Cadastrar} alt="" /> Cadastrar pedido
            </button>
          </Link>
          <Link to="/mapa" style={{ textDecoration: "none" }}>
            <button>
              <img src={Mapa} alt="" /> Mapa
            </button>
          </Link>
          <Link to="/relatorio" style={{ textDecoration: "none" }}>
            <button>
              <img src={Relatorio} alt="" /> Relatório
            </button>
          </Link>
        </div>
      </Styled.SideBar>
    </>
  );
}
