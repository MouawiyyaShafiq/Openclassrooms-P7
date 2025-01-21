import "../css/pageHome.css"
import Banner from "../components/banner"
import bannerImg from "../images/paysage_plage.png"

function PageHome () {

    return (
        <>
        <Banner page="Home" bannerImg={bannerImg} bannertitle1="Chez vous," bannertitle2="partout et ailleurs"/>
        <section className="galleryHome">
        </section>
        </>
    )

}

export default PageHome