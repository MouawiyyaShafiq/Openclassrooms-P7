function Banner ({bannerImg,bannertitle1,bannertitle2}) {
    return(

       <section className={`banner`}>
        <h1 className={`banner_title`}><span>{bannertitle1}</span><span>{bannertitle2}</span></h1>
        <img className={`banner_img`} src={bannerImg} alt="image d'un paysage"></img>
        </section> 
        
    )
}

export default Banner