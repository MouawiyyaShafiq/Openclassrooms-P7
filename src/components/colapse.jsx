import { useState } from "react";
import colapseArrow from "../images/colapse_arrow.png"

function Colapse ({colapseTitle,colapseContent}) {

    const [isOpen , setIsOpen] = useState(false)

    function handleClick () {
        setIsOpen(!isOpen)
    }

    return (

        <article className={`colapse colapse--${isOpen ? "isOpen" : "isClosed"}`}>
            <div className="colapse_header">
                <h2 className="colapse_header_title">{colapseTitle}</h2>
                <img onClick={ () => handleClick()} className={`colapse_header_arrow colapse_header_arrow--${isOpen ? "isOpen" : "isClosed"}`} src={colapseArrow} alt="Flèche pour ouvrir ou fermer le colapse"></img>
            </div>
            
            <div className={`colapse_content colapse_content--${isOpen ? "isOpen" : "isClosed"}`}>
                {Array.isArray(colapseContent) ? 
                 <ul style={{"listStyle": "none","padding":"0","margin":"0"}}>
                    {colapseContent.map((content)=>{ 
                        return <li key={content}>{content}</li> 
                    })}
                 </ul>
                 : colapseContent}
            </div>
    
        </article>

    )

}

export default Colapse