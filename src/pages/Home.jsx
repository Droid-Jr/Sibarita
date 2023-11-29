import AliadosHome from '../componente/Views/AliadosHome.jsx'
import HomeNav from '../componente/Views/HomeNav.jsx'
import OpcionsHome from '../componente/Views/OpcionsHome.jsx'
import Footerr from '../componente/footerr/Footerr.jsx'


function Home() {
  return (
    <div className="w-[100%] h-screen">
        <HomeNav/>
        <OpcionsHome/>
        <AliadosHome/>
        <Footerr/>
    </div>
  )
}

export default Home