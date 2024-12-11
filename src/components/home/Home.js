import './homeStyles.css'
import ContactoPage from '../contacto/Contacto';

function HomePage() {
    const estilo = {
        backgroundColor: 'red',
        height: '100vh'
    }

    return (
        <>
            <div style={estilo}>
                <h1> Home Page</h1>
            </div>
            <ContactoPage />
        </>
    )

}

export default HomePage