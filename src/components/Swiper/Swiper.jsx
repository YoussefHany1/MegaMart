import './swiper.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import watch from '../../assets/slide/Untitled-1.png'
import phone from '../../assets/slide/Untitled-2.png'
import cosmetics from '../../assets/slide/Untitled-3.png'
import elec from '../../assets/slide/Untitled-4.png'
import furniture from '../../assets/slide/Untitled-5.png'
function App() {


    return (
    <>
        <section className="ad d-flex justify-content-center align-items-center my-5 mb-5">
            <div className="slideshow swiper rounded-4 overflow-hidden">
                <Splide options={ {rewind: true, perPage : 1, autoplay: true, type: 'loop',} } tag="header" >
                    <SplideSlide><a href="#" className="swiper-slide rounded-4 d-flex justify-content-center"><img src={watch} className="image-slide rounded-4" alt="SmartWatch" /></a></SplideSlide>
                    <SplideSlide><a href="#" className="swiper-slide rounded-4 d-flex justify-content-center"><img src={phone} className="image-slide rounded-4" alt="SmartPhones" /></a></SplideSlide>
                    <SplideSlide><a href="#" className="swiper-slide rounded-4 d-flex justify-content-center"><img src={cosmetics} className="image-slide rounded-4" alt="Cosmetics" /></a></SplideSlide>
                    <SplideSlide><a href="#" className="swiper-slide rounded-4 d-flex justify-content-center"><img src={elec} className="image-slide rounded-4" alt="Electronics" /></a></SplideSlide>
                    <SplideSlide><a href="#" className="swiper-slide rounded-4 d-flex justify-content-center"><img src={furniture} className="image-slide rounded-4" alt="Furniture" /></a></SplideSlide>
                </Splide>
                <div className="swiper-pagination dots"></div>
                <div className="back swiper-button-prev"></div>
                <div className="forward swiper-button-next"></div>
            </div>
        </section>
    </>
    )
}
export default App
