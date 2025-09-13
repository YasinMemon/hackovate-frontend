import React from 'react'
import { motion } from 'framer-motion'

function SevenDays({ forecast }) {
    // Function to get day name from date
    const getDayName = (dateString, index) => {
        if (index === 0) return 'Today'

        const date = new Date(dateString)
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return dayNames[date.getDay()]
    }

    // Function to get weather icon based on weather condition
    const getWeatherIcon = (weather) => {
        if (!weather) return "./icons/index.png"

        const condition = weather.toLowerCase()
        if (condition.includes('cloud')) return "./icons/cloud.png"
        if (condition.includes('rain') || condition.includes('drizzle')) return "./icons/rain.png"
        if (condition.includes('clear') || condition.includes('sunny')) return "./icons/index.png"
        if (condition.includes('haze') || condition.includes('mist')) return "./icons/humidity.png"
        return "./icons/index.png" // default
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8"
        >
            <motion.div
                className='backdrop-blur-lg bg-white/10 border border-white/20 p-6 pb-8 rounded-2xl shadow-2xl'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className='font-bold text-2xl mb-6 text-white'
                    variants={titleVariants}
                >
                    7-Day Forecast
                </motion.h2>

                <motion.div
                    className='flex gap-4 overflow-x-auto pb-4 pt-2 px-2'
                    variants={containerVariants}
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                    }}
                >
                    {weekData.map((day, index) => (
                        <motion.div
                            key={index}
                            className='backdrop-blur-lg bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg min-w-[140px] flex-shrink-0 relative group cursor-pointer'
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                backgroundColor: "rgba(255,255,255,0.2)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.p
                                className='capitalize font-semibold text-white mb-3'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                {day.day}
                            </motion.p>

                            <motion.div
                                className="flex justify-center mb-3"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.7 + index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <motion.img
                                    src={day.icon}
                                    className='w-14 h-14 drop-shadow-lg'
                                    alt={day.day}
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        scale: 1.2
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut"
                                    }}
                                    animate={{
                                        y: [0, -3, 0],
                                    }}
                                    style={{
                                        transition: {
                                            duration: 2 + index * 0.1,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                />
                            </motion.div>

                            <motion.p
                                className='font-bold text-xl text-white text-center'
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.9 + index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 150
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                                }}
                            >
                                {day.temp}°C
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default SevenDays
