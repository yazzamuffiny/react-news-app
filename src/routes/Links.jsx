import { Route, Routes } from "react-router-dom"

//pages/components
import Home from "../components/pages/Home"
import SingleArticle from "../components/pages/SingleArticle"


const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/article" element={<SingleArticle/>}/>
    </Routes>
  )
}

export default Links
