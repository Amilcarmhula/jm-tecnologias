import './homeStyles.css'
import EquipePage from '../equipe/Equipe';
import ContactoPage from '../contacto/Contacto';
import ServicePage from '../service/Service';
import logo from '../../assets/LOGOTIPO.png'

function HomePage() {
    const estilo = {
        backgroundColor: 'red',
        height: '70vh'
    }

    return (
        <>
            {/* <div style={estilo}>
                <h1> Soluções inteligentes para o sucesso de pequenas e médias empresas</h1>
                <p>unimos tecnologia e inteligência humana para oferecer suporte excepcional e soluções personalizadas que impulsionam negócios com confiança e eficiência.</p>
            </div> */}
            <div className='hero-section'>
                <div className='left-col'>
                    <h1> Soluções inteligentes para o sucesso de pequenas e médias empresas</h1>
                    <p>Unimos tecnologia e inteligência humana para oferecer suporte excepcional e soluções personalizadas que impulsionam negócios com confiança e eficiência.</p>
                    <a href="#">Contacte-nos</a>
                </div>
                <div className='right-col'>
                    <img src={logo} alt="Logotipo da empresa" />
                </div>
            </div>
            <ServicePage />
            <EquipePage />
            <ContactoPage />
        </>
    )

}

export default HomePage