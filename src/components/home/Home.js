import './homeStyles.css'
import EquipePage from '../equipe/Equipe';
import ContactoPage from '../contacto/Contacto';

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
            <EquipePage />
            <ContactoPage />
        </>
    )

}

export default HomePage