import { Route, Routes } from "react-router-dom"

//pages/components
import Home from "../components/pages/Home"
import SingleArticle from "../components/pages/SingleArticle"
import AboutMe from "../components/pages/AboutMe"

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<SingleArticle/>}/>
        <Route path="/about" element={<AboutMe/>}/>
    </Routes>
  )
}

export default Links
