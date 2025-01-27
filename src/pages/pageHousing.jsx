import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"

function PageHousing () {
    const {currentAdId} = useParams()

    const [currentAd, setCurrentAd] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{

        async function fetchData() {

            try {
                const response = await fetch("/adList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const adList = await response.json();

                const foundAd = adList.find((ad)=>ad.id==currentAdId)
            
                setCurrentAd(foundAd)


            } catch (error) {
                navigate("*")
                console.error("Erreur lors de la récupération des données", error)
            }
    
          }
        
        fetchData()
        
        
    }, [])

    if (currentAd) {

    return (

        <Carousel page="Housing" carouselImgs={currentAd.pictures}/>
        
    )}

}

export default PageHousing