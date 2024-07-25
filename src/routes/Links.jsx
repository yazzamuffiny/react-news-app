import { Route, Routes } from "react-router-dom"

//pages/components
import Home from "../components/pages/Home"



const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Links
