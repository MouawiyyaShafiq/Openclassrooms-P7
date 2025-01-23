import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"
import carouselImgs from "../images/paysage_plage.png"

function PageHousing () {
    const {currentAddId} = useParams()

    const [housingAddList, setHousingAddList] = useState(null)
    const [currentAdd, setCurrentAdd] = useState(null)


    useEffect(()=>{

        async function fetchData() {

            try {
                const response = await fetch("/addList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const addList = await response.json();

                setHousingAddList(addList)
                
                if(housingAddList != null){

                setCurrentAdd(housingAddList.find((add)=>add.id==currentAddId))

                }


            } catch (error) {
                console.error("Erreur lors de la récupération des données", error)
            }
    
          }
        
        fetchData()
        
        
    }, [housingAddList])

    
    if (currentAdd != null ) {

    return (

        <Carousel page="Housing" carouselImgs={currentAdd.pictures}/>
        
    )}

}

export default PageHousing