import logo from "../../assets/logo.png"
import busca from "../../assets/busca.png"
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import S from "./header.module.scss"

export default function header(){
    return(
      <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
            <img src={logo} alt="imagem de um livro" />
            <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li> <Link to="/Doados">Livros Doados</Link> </li>
                <li> <Link to="/QueroDoar">Quero Doar</Link> </li>
            </ul>
        </nav>
        <div className={S.boxInput}>
            <input type="text" placeholder="O que você procura?" />
            <img src={busca} alt="imagem de lupa" />
        </div>
      </header>
      <Routes>
         <Route path="/" element={<Inicio/>}/>
         <Route path="/Doados" element={<Doados/>}/>
         <Route path="/QueroDoar" element={<QueroDoar/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
