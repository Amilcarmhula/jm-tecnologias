import './equipeStyles.css'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import me from '../../assets/1.jpg'

function EquipePage() {

    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
            dynamicBullets:true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });


    return (
        <>
            <div className='container' onLoad={()=>swiper}>
                <div className='swiper'>
                        <div className="card-list swiper-wrapper">

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Amilcar Mula</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Edmilson Mula</h2>
                                <p className='user-profession'>Designer Gráfico e Marketing Digital</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Benildo Nhantumbo</h2>
                                <p className='user-profession'>Gestor de Recursos Humanos</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Edson Nhantumbo</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Eurix Macamo</h2>
                                <p className='user-profession'>Eng. de Tecnologias de Informação, Comunicação e Gestão</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>

                            <div className="card-item swiper-slide">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Amilcar Mula, Jr.</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </>
    )

}

export default EquipePage
