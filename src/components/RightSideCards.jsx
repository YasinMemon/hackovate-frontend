import React from 'react'
import AirQualityCard from './AirQualityCard'
import SubCycleCards from './SubCycleCard'

function RightSideCards({ weatherData }) {
    return (
        <div className='w-full' >
            <AirQualityCard weatherData={weatherData} />
            <SubCycleCards weatherData={weatherData} />
        </div>
    )
}

export default RightSideCards
