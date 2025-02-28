import './essentials.css'
import essentials from '../../assets/essentials/daily-essentials.png'
import vegitables from '../../assets/essentials/vegitables.png'
import fruits from '../../assets/essentials/fruits.png'
import strowberry from '../../assets/essentials/strowberry.png'
import mango from '../../assets/essentials/mango.png'
import cherry from '../../assets/essentials/cherry.png'


function App() {
    return (
    <>
        <section className="daily my-5 py-3">
            <div className="header d-flex justify-content-between fw-bold">
                <div className="line fs-4 pb-3">Daily <p className="color d-inline">Essentials</p></div>
                <a href="#" className="text-decoration-none d-flex align-items-center"><small className="fw-normal">View All<i className="fa-solid fa-chevron-right ms-2"></i></small></a>
            </div>
            <div className="categories d-flex justify-content-center align-items-center p-5 mt-4 row">
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={essentials} className="" alt="Daily-Essentials" /></a></div>
                        <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Daily Essentials<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                    </div>
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={vegitables} className="" alt="Vegitables" /></a></div>
                    <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Vegitables<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                </div>
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={fruits} className="" alt="Fruits" /></a></div>
                    <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Fruits<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                </div>
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={strowberry} className="" alt="Strowberry" /></a></div>
                    <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Strowberry<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                </div>
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={mango} className="" alt="Mango" /></a></div>
                    <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Mango<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                </div>
                <div className="cat col mb-5">
                    <div className="photo align-content-center text-center rounded-4"><a href="#"><img src={cherry} className="" alt="Cherry" /></a></div>
                    <div className="text text-center mt-3"><a href="#" className="text-decoration-none">Cherry<br /><b className="fs-5">UP to 50% OFF</b></a></div>
                </div>
            </div>
        </section>
    </>
    )
}

export default App
