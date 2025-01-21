function Banner ({page,bannerImg,bannertitle1,bannertitle2}) {
    return(

       <section className={`banner${page}`}>
        <h1 className={`banner${page}_title`}><span>{bannertitle1}</span><span>{bannertitle2}</span></h1>
        <img className="bannerHome_img" src={bannerImg} alt="image d'un paysage"></img>
        </section> 
        
    )
}

export default Banner