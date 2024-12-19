import './serviceStyles.css'

function ServicePage() {
    return (
        <div className='section'>
            <div className="title">
                <h1>Nossos Servicos</h1>
            </div>
            <div className='sub-title'>
                <p>Bem-vindo à JM-tecnologias, onde a segurança, a tecnologia e a inovação convergem para criar soluções abrangentes e personalizadas.</p>
            </div>
            <div className="servicos">
                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <h3>Desenvolvimento de Software</h3>
                    <p>A inovação é a base do que fazemos. Oferecemos um serviço de desenvolvimento de softwares que vai muito além de linhas de código; criamos soluções personalizadas e eficientes que impulsionam o crescimento do seu negócio.
                    </p>
                    <div className="button">
                        <a href="#" >Saiba mais</a>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-server"></i>
                    </div>
                    <h3>Plataformas Digitais</h3>
                    <p>Nossa equipe experiente e apaixonada se dedica a criar soluções digitais sob medida para atender às necessidades exclusivas do seu negócio. Desde o desenvolvimento de um site funcional e atraente até a implementação de estratégias de marketing digital eficazes, estamos aqui para ajudá-lo a atingir seus objetivos.
                    </p>
                    <div className="button">
                        <a href="#" >Saiba mais</a>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-shop"></i>
                    </div>
                    <h3>Fornecimento de consumivies</h3>
                    <p>Nosso compromisso é fornecer soluções de segurança eletrônica personalizadas que atendam às necessidades específicas de cada cliente. Desde a venda de equipamentos de alta qualidade até a instalação profissional e serviços de manutenção contínua, estamos aqui para garantir a segurança e a tranquilidade de nossos clientes.</p>
                    <div className="button">
                        <a href="#" >Saiba mais</a>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-shield"></i>
                    </div>
                    <h3>Segurança Eletrónica e automação</h3>
                    <p>Nosso compromisso é fornecer soluções de segurança eletrônica personalizadas que atendam às necessidades específicas de cada cliente. Desde a venda de equipamentos de alta qualidade até a instalação profissional e serviços de manutenção contínua, estamos aqui para garantir a segurança e a tranquilidade de nossos clientes.</p>
                    <div className="button">
                        <a href="#" >Saiba mais</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ServicePage