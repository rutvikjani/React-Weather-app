function DetailContent({heading, value}){
    return(
        <>
            <div className='detailContent'>
                            <div className='heading'>
                                <p>{heading}</p>
                            </div>
                            <div className='hourlyWeatherContainer'>
                                <h3>{value}</h3>
                            </div>
            </div>
        </>
    )
}

export default DetailContent;