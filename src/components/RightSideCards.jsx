import React from 'react'
import AirQualityCard from './AirQualityCard'
import SubCycleCards from './SubCycleCard'

function RightSideCards({ weatherData }) {
    return (
        <div className='w-full lg:w-auto lg:min-w-[320px]' >
            <AirQualityCard weatherData={weatherData} />
            <SubCycleCards weatherData={weatherData} />
        </div>
    )
}

export default RightSideCards
