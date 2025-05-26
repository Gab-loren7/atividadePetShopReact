import "./BanhoTosa.css"
import "../components/identificadorDaPagina.css"
import Img1 from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg"
import Img2 from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg"

function BanhoTosa() {
    return (
        <div>
            <h1 className="identificacaoPagina">Banho e Tosa</h1>

            <div className="interface">
                <div className="conteudo-1">
                    <img className='img1' src={Img1} />
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.</p>
                        <button className="botao">Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className="interface">
                <h2 className="text-patcare">
                    <img src="https://cdn-icons-png.flaticon.com/512/98/98110.png" />PET CARE<img src="https://cdn-icons-png.flaticon.com/512/12/12638.png" />
                </h2>
            </div>

            <div className="interface">
                <div className="conteudo-2">
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus eos nobis provident. Tempore illum accusamus voluptatibus eos libero, earum deleniti assumenda nobis molestias vel? Atque quasi tempore sit possimus.</p>
                        <button className="botao">Saiba Mais</button>
                    </div>
                    <img className='img2' src={Img2} />
                </div>
            </div>
        </div>
    )
}

export default BanhoTosa