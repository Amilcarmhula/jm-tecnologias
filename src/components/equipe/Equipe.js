import './equipeStyles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Import corrigido
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import me from '../../assets/1.jpg';

function EquipePage() {
    return (
        <>
            <div className='container'>
                <div className="card-list swiper-wrapper">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >


                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Amilcar Mula</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Edmilson Mula</h2>
                                <p className='user-profession'>Designer Gráfico e Marketing Digital</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Benildo Nhantumbo</h2>
                                <p className='user-profession'>Gestor de Recursos Humanos</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Edson Nhantumbo</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Eurix Macamo</h2>
                                <p className='user-profession'>Eng. de Tecnologias de Informação, Comunicação e Gestão</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h2 className='user-name'>Amilcar Mula, Jr.</h2>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default EquipePage;
