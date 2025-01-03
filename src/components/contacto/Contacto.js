import { useForm } from "react-hook-form"
import "./contactoStyle.css"


function ContactoPage() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        //   fetch('http://localhost:3010/send-message', {
        fetch('https://jm-api-vi9j.onrender.com/send-message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Server response:", data);
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <div className="section-wrapper" id="contact">
            <h1> Vamos Conversar</h1>
            <p>Entre em contato conosco hoje para agendar uma consulta ou solicitar assistência emergencial. estamos ansiosos para atender e superar suas expectativas com serviços de tecnologia rápidos, confiáveis ​​e profissionais.</p>
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title" >Informações de contacto</h2>
                    <h3 className="info-sub-title">Preencha o formulario com seus dados de contacto e de descricao das suas duvidas e nossa equipe entrara em contacto dentro de 24 horas</h3>
                    <ul className="info-details">
                        <li>
                            <i className="fa-solid fa-phone fa-shake"></i>
                            <span>Telefone: </span> <a href="tel:+258847100793">+258 84 710 0793</a>
                        </li>
                        <li>
                            <i className="fa-brands fa-whatsapp fa-bounce"></i>
                            <span>WhatsApp: </span> <a href="https://wa.me/258847100793?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!" target="_blank">+258 84 710 0793</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-at fa-spin"></i>
                            <span>E-mail: </span> <a href="mailto:info@jm-tecnologias.co.mz">info@jm-tecnologias.co.mz</a>
                        </li>

                        <li>
                            <i className="fa-solid fa-globe fa-flip"></i>
                            <span>Website: </span> <a href="https://www.jm-tecnologias.co.mz">www.jm-tecnologias.co.mz</a>
                        </li>
                    </ul>
                    <ul className="social-icon">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="form-wrap">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="form-title">Envie a sua mensagem aqui</h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input type="text" placeholder="Digite o seu nome" {...register("nome")} />
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder="Digite o seu numero de telefone" {...register("numero")} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Entre o seu e-mail" {...register("email")} />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" placeholder="Em que podemos ajudar?" {...register("descricao")}></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Enviar" className="submit-button" />
                    </form>
                </div>
            </div>

        </div>

    )
}

export default ContactoPage