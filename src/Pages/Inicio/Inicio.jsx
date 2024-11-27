import S from "./inicio.module.scss"
import leitura from "../../assets/leitura.png"
import network from "../../assets/network.png"
import balança from "../../assets/balança.png"
import transformar from "../../assets/transformar.png" 

export default function Inicio(){
    return(
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                 <div>
                    <h2>Por que devo doar?</h2>
                 </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={network} alt="" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={leitura} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transformar} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balança} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}