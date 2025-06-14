import "../components/identificadorDaPagina.css"
import "./Adestramento.css"
import Banner from "../imagens/adestramento/banner-adestramento.jpg"

import foto1 from "../imagens/adestramento/adestramento1.jpg"
import foto2 from "../imagens/adestramento/adestramento2.jpg"
import foto3 from "../imagens/adestramento/adestramento3.jpg"
import foto4 from "../imagens/adestramento/adestramento4.jpg"
import foto5 from "../imagens/adestramento/adestramento5.jpg"


function Adestramento() {
    return (
        <div>
            <h1 className="identificacaoPagina">Adestramento</h1>

            <div className="interface">
                <img src={Banner} className="banner"></img>

                <p className="textoLorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi. Tempore illtatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi
                    <br />
                    <br />
                    tempore sit possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.
                </p>

                <div className="galeriaFotos">
                    <img src={foto1} />
                    <img src={foto2} />
                    <img src={foto3} />
                    <img src={foto4} />
                    <img src={foto5} />
                </div>

                <div className="containerPerguntas">

                    <h2>Perguntas Frequentes</h2>

                    <details>
                        <summary className="perguntas" id="pergunta">Qual a melhor idade para adestramento?</summary>

                        <div className="conteudo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, eLorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, e</p>
                        </div>
                    </details>

                    <details >
                        <summary className="perguntas" id="pergunta">Toda raça pode ser adestrada?</summary>

                        <div className="conteudo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, eLorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, e</p>
                        </div>
                    </details>

                    <details >
                        <summary className="perguntas" id="pergunta">Qual a melhor idade para adestramento?</summary>

                        <div className="conteudo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, eLorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illtatibus eos libero, e</p>
                        </div>
                    </details>


                </div>
            </div>
        </div>
    )
}

export default Adestramento