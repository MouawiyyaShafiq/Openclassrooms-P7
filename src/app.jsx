import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Header from "./components/header";
import Footer from "./components/footer";
import "./css/main.css"

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Router/>
        </main>
        <Footer/>
    </BrowserRouter>  
  );
}

export default App;