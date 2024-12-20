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
                <div className="title">
                    <h1>Nossa Equipe</h1>
                </div>
                <div className='sub-title'>
                    <p>Num ambiente dinâmico e inovador, a equipe da JM-Tecnologias está empenhada em moldar o futuro da tecnologia. Nossa missão vai além de simplesmente fornecer soluções tecnológicas. Estamos comprometidos em criar um impacto positivo, assegurando que cada interação digital seja segura e confiável.
                        </p>
                </div>
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
                                <h3 className='user-name'>Amilcar Mula</h3>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h3 className='user-name'>Edmilson Mula</h3>
                                <p className='user-profession'>Designer Gráfico e Marketing Digital</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h3 className='user-name'>Benildo Nhantumbo</h3>
                                <p className='user-profession'>Gestor de Recursos Humanos</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h3 className='user-name'>Edson Nhantumbo</h3>
                                <p className='user-profession'>Eng. Informático e de Telecomunicações</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h3 className='user-name'>Eurix Macamo</h3>
                                <p className='user-profession'>Eng. de Gestão e TIC.</p>
                                <button className='message-button'>Contacte-me</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={me} alt="User Image" className='user-image' />
                                <h3 className='user-name'>Amilcar Mula, Jr.</h3>
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
