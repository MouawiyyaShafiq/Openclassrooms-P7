import { Route, Routes } from "react-router-dom"
import PageAccueil from "./pages/pageAccueil"
import PageAPropos from "./pages/pageAPropos"
import PageLogement from "./pages/pageLogement"
import PageErreur from "./pages/pageErreur"

function Router (){
    return (
        <Routes>
            <Route path="/" element={<PageAccueil/>}></Route>
            <Route path="/A-Propos" element={<PageAPropos/>}></Route>
            <Route path="/Logement" element={<PageLogement/>}></Route>
            <Route path="*" element={<PageErreur/>}></Route>
        </Routes>
    )
}

export default Router