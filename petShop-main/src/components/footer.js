import './footer.css'

function Footer() {
    const anoAtual = new Date().getFullYear(); // Pega o ano atual

    return (

        <div className='footer-body'>
            <div className='interface'>
                <h1>Fale Conosco</h1>
            </div>

            <div className='informacoes'>

                <div className='informacoes-left'>
                    <input placeholder='Nome' className='input-name'></input>
                    <input placeholder='Email' className='input-email'></input>
                    <input placeholder='Mensagem' className='input-mensagem'></input>
                    <div className='align-btn'>
                        <button className='btnEnviar'>Enviar Agora</button>
                    </div>
                </div>
                <div className='informacoes-right'>
                    <span className='align-icons'><i class="bi bi-telephone-fill"></i><h2>(48) 988136495</h2></span>
                    <span className='align-icons'><i class="bi bi-whatsapp"></i><h2>(48) 988136495</h2></span>
                    <span className='align-icons'><i class="bi bi-geo-alt-fill"></i><h2>SC-401, 3730-Saco Grande, Florianópolis -SC, 88032-005</h2></span>

                    <div className='social-icons'>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>

            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113274.8267033326!2d-48.53503643865933!3d-27.47429196569097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952747d1e678cccf%3A0xcb4f738cfb1aa497!2sEscola%20SESI%20-%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1747859017402!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className='direitosAutorais'>
                <p>&copy; {anoAtual} - PetShop. Todos os Direitos Reservados</p>
            </div>
        </div>

    );


}

export default Footer;