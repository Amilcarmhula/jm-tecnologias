import './homeStyles.css'
import EquipePage from '../equipe/Equipe';
import ContactoPage from '../contacto/Contacto';
import ServicePage from '../service/Service';

function HomePage() {
    const estilo = {
        backgroundColor: 'red',
        height: '70vh'
    }

    return (
        <>
            <div style={estilo}>
                <h1> Soluções inteligentes para o sucesso de pequenas e médias empresas</h1>
                <p>unimos tecnologia e inteligência humana para oferecer suporte excepcional e soluções personalizadas que impulsionam negócios com confiança e eficiência.</p>
            </div>
            <ServicePage />
            <EquipePage />
            <ContactoPage />
        </>
    )

}

export default HomePage