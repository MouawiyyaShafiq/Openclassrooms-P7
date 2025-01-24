import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"

function PageHousing () {
    const {currentAddId} = useParams()

    const [currentAdd, setCurrentAdd] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{

        async function fetchData() {

            try {
                const response = await fetch("/addList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const addList = await response.json();

                const foundAdd = addList.find((add)=>add.id==currentAddId)
            
                setCurrentAdd(foundAdd)


            } catch (error) {
                navigate("*")
                console.error("Erreur lors de la récupération des données", error)
            }
    
          }
        
        fetchData()
        
        
    }, [])

    if (currentAdd) {

    return (

        <Carousel page="Housing" carouselImgs={currentAdd.pictures}/>
        
    )}

}

export default PageHousing