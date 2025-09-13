import React from 'react'
import AirQualityCard from './AirQualityCard'
import SubCycleCards from './SubCycleCard'

function RightSideCards() {
    return (
        <div className='w-full' >
            <AirQualityCard />
            <SubCycleCards />
        </div>
    )
}

export default RightSideCards
