import React from 'react'
import { motion } from 'framer-motion'

function SevenDays({ forecast }) {
    // Function to get day name from date
    const getDayName = (dateString, index) => {
        if (index === 0) return 'Today'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { weekday: 'long' })
    }

    // Function to get weather icon based on weather condition
    const getWeatherIcon = (weather) => {
        const condition = weather?.toLowerCase() || ''
        if (condition.includes('rain')) return './icons/rain.png'
        if (condition.includes('cloud')) return './icons/cloud.png'
        if (condition.includes('sun') || condition.includes('clear')) return './icons/index.png'
        return './icons/cloud.png' // default
    }

    // Prepare forecast data or use default if not available
    const weekData = forecast && forecast.length > 0
        ? forecast.map((day, index) => ({
            day: getDayName(day.date, index),
            temp: Math.round(day.temperature?.max || day.temperature || 25),
            icon: getWeatherIcon(day.weather),
            weather: day.weather
        }))
        : [
            { day: "Today", temp: 30, icon: "./icons/index.png", weather: "sunny" },
            { day: "Friday", temp: 29, icon: "./icons/cloud.png", weather: "cloudy" },
            { day: "Saturday", temp: 28, icon: "./icons/rain.png", weather: "rainy" },
            { day: "Sunday", temp: 27, icon: "./icons/index.png", weather: "sunny" },
            { day: "Monday", temp: 26, icon: "./icons/cloud.png", weather: "cloudy" }
        ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.div
            className="w-full mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2
                className="text-2xl font-bold text-white mb-6"
                variants={titleVariants}
            >
                7-Day Forecast
            </motion.h2>

            <motion.div
                className="flex gap-4 overflow-x-auto pb-4"
                variants={containerVariants}
            >
                {weekData.map((day, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[140px] bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center"
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="text-white font-medium mb-2">
                            {day.day}
                        </div>
                        <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                            <img src={day.icon} alt={day.weather} className="w-8 h-8" />
                        </div>
                        <div className="text-white text-xl font-bold">
                            {day.temp}°C
                        </div>
                        <div className="text-white/70 text-sm capitalize">
                            {day.weather}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default SevenDays
