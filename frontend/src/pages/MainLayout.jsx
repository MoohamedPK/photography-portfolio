import NavBar from "../components/NavBar"
import Master from "./Master"

function MainLayout() {
  return (
    <div className="font-Robert">
      <NavBar/>
      <Master/>

        {/* gallery */}
        <div className="bg-pink-300 h-screen w-full relative"></div>
    </div>
  )
}

export default MainLayout