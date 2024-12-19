import './homeStyles.css'
import EquipePage from '../equipe/Equipe';
import ContactoPage from '../contacto/Contacto';
import ServicePage from '../service/Service';

function HomePage() {
    const estilo = {
        // backgroundColor: 'red',
        height: '100vh'
    }

    return (
        <>
            <div style={estilo}>
                <h1> Home Page</h1>
            </div>
            <ServicePage />
            <EquipePage />
            <ContactoPage />
        </>
    )

}

export default HomePage