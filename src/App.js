import React from 'react'
import Header from './components/Header'
import LandPage from './components/LandPage'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ExploreMenu from './components/ExploreMenu'
import DeliveryAndPayment from './components/DeliveryAndPayment'
import BannerPage from './components/BannerPage'
import FollowUsSection from './components/FollowUsSection'
import Contact from './components/Contact'



const App = () => {
  return (
    <>
    <Header/>
    <LandPage/>
    <AboutUs/>
    <ExploreMenu/>
    <DeliveryAndPayment/>
    <BannerPage/>
    <Contact/>
    <FollowUsSection/>
    <Footer/>
    </>
  )
}

export default App