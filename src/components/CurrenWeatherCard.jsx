import React from 'react'
import { motion } from 'framer-motion'

function CurrenWeatherCard({ weatherData }) {
    // Function to get current date in a readable format
    const getCurrentDate = () => {
        const today = new Date()
        return today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Function to capitalize first letter of each word
    const capitalizeWords = (str) => {
        if (!str) return ''
        return str.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ')
    }

    // Function to determine UV level based on AQI or create a mock UV value
    const getUVLevel = (aqi) => {
        if (aqi && aqi !== 'N/A') {
            const numericAqi = parseInt(aqi)
            if (numericAqi <= 50) return "3 Low"
            if (numericAqi <= 100) return "6 Moderate"
            if (numericAqi <= 150) return "8 High"
            return "10 Very High"
        }
        return "N/A"
    }

    // Default values if no weather data
    const temperature = weatherData?.temperature ? Math.round(weatherData.temperature) : 22
    const weather = weatherData?.weather ? capitalizeWords(weatherData.weather) : "Partly Cloudy"
    const humidity = weatherData?.humidity ? `${weatherData.humidity}%` : "60%"
    const windSpeed = weatherData?.wind_speed ? `${Math.round(weatherData.wind_speed)} km/h` : "15 km/h"
    const uvLevel = getUVLevel(weatherData?.aqi)

    const weatherIcons = [
        { src: "./icons/index.png", alt: "UV index", label: "UV index", value: uvLevel },
        { src: "./icons/humidity.png", alt: "Humidity", label: "Humidity", value: humidity },
        { src: "./icons/wind.png", alt: "Wind Speed", label: "Wind Speed", value: windSpeed }
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    const iconVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
            }
        }
    }

    return (
        <motion.div
            className='mt-10 backdrop-blur-lg bg-white/10 border border-white/20 py-6 w-full px-8 rounded-2xl shadow-2xl relative overflow-hidden'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Floating orbs inside the card */}
            <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='relative z-10'>
                <motion.div
                    className='flex justify-between gap-4 mb-8'
                    variants={itemVariants}
                >
                    <div>
                        <motion.p
                            className='text-white/90 font-semibold text-lg'
                            variants={itemVariants}
                        >
                            Current Weather
                        </motion.p>
                        <motion.p
                            className='text-white/70 mt-2'
                            variants={itemVariants}
                        >
                            Today, <span className='font-bold text-white'>{getCurrentDate()}</span>
                        </motion.p>
                    </div>
                    <motion.div
                        className='text-end'
                        variants={itemVariants}
                    >
                        <motion.span
                            className='font-bold text-6xl text-white block'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 150
                            }}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 20px rgba(255,255,255,0.5)"
                            }}
                        >
                            {temperature}°C
                        </motion.span>
                        <motion.p
                            className='text-white/80 text-lg mt-2'
                            variants={itemVariants}
                        >
                            {weather.split(' ').map((word, index) => (
                                <span key={index}>
                                    {word}
                                    {index < weather.split(' ').length - 1 && <br />}
                                </span>
                            ))}
                        </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='flex justify-around gap-8'
                    variants={itemVariants}
                >
                    {weatherIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className='flex flex-col items-center group cursor-pointer'
                            variants={iconVariants}
                            custom={index}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <motion.img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-12 h-12 drop-shadow-lg"
                                    loading="lazy"
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-white/20 rounded-full blur-md"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            <motion.p
                                className='text-center font-bold text-white mt-3 drop-shadow-lg'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                {icon.label}
                            </motion.p>
                            <motion.p
                                className='text-center text-white/80'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 + index * 0.1 }}
                            >
                                {icon.value}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CurrenWeatherCard
