import './footer.css'

function Footer() {
    return (

        <div className='footer-body'>
            <div className='interface'>
                <h1>Fale Conosco</h1>
            </div>

            <div className='informacoes'>
                
                    <div className='informacoes-left'>
                        <input placeholder='Nome' className='input-name'></input>
                        <input placeholder='Email' className='input-email'></input>
                        <input placeholder='Mensagens' className='input-mensagens'></input>
                    </div>
                    <div className='informacoes-right'>
                        <span><h2>(48) 988136495</h2></span>
                        <span></span>
                        <span></span>
                    </div>
               
            </div>
        </div>
    );
}

export default Footer;