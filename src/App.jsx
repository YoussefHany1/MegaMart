import './App.css'
import Navbar from './components/NavBar/Navbar'
import Swiper from './components/Swiper/Swiper'
import Phones from './components/Phones/Phones'
import TopCategories from './components/TopCategories/TopCategories'
import ElectronicsBrands from './components/ElectronicsBrands/ElectronicsBrands'
import Essentials from './components/Essentials/Essentials'
import Footer from './components/Footer/Footer'
import SideNav from './components/SideNav2/SideNav'
import SignIn from './components/SignIn/SignIn'
function App() {
  return (
    <>
      <Navbar />
      <Swiper />
      <Phones />
      <TopCategories />
      <ElectronicsBrands />
      <Essentials />
      <Footer />

      <SideNav />
      <SignIn />
    </>
  )
}

export default App
