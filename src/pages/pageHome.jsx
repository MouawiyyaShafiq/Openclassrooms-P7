import "../css/pageHome.css"
import Banner from "../components/banner"
import bannerImg from "../images/paysage_plage.png"
import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/card"

function PageHome () {

    const [housingAddList, setHousingAddList] = useState([])

    useEffect(()=>{
        
        async function fetchData() {

            try {
                const response = await fetch("/addList.json");

                if (!response) {
                    throw new Error(`${response.status}`);
                  }

                const addList = await response.json();

                setHousingAddList(addList)

            } catch (error) {
                console.error("Erreur lors de la récupération des données", error)
            }

          }

        fetchData()
        
    }, [])

    return (
        <>
        <Banner page="Home" bannerImg={bannerImg} bannertitle1="Chez vous," bannertitle2="partout et ailleurs"/>

        <section className="galleryHome">

            {housingAddList.map((add)=>{ return <Card key={add.id} page="Home" cardImg={add.cover} cardTitle={add.title} id={add.id}/>})}
            
        </section>
        </>
    )

}

export default PageHome