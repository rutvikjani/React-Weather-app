function CityTemperature({temprature, minMaxTemprature}){
    return(
        <>
        <div className='tempratureContainer'>
                        <h1>{temprature}</h1>
                        <p>{minMaxTemprature}</p>
        </div>
        </>
    )
}

export default CityTemperature;

