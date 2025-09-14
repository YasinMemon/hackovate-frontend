import React from 'react'
import { motion } from 'framer-motion'

function AirQualityCard({ weatherData }) {
    // Function to get AQI level and color based on value (5-level system)
    const getAQIInfo = (aqi) => {
        if (!aqi || aqi === 'N/A') {
            return {
                value: 'N/A',
                level: 'Unknown',
                levelNumber: 0,
                color: 'text-gray-400',
                bgColor: 'from-gray-400/20 to-gray-600/20',
                borderColor: 'border-gray-300/30',
                progressColor: 'from-gray-400 to-gray-600',
                icon: '❓',
                description: 'Air quality data unavailable'
            }
        }

        const numericAqi = parseInt(aqi)

        // Level 1: Good (0-50)
        if (numericAqi <= 50) {
            return {
                value: numericAqi,
                level: 'Good',
                levelNumber: 1,
                color: 'text-green-400',
                bgColor: 'from-green-400/20 to-emerald-400/20',
                borderColor: 'border-green-300/30',
                progressColor: 'from-green-400 to-emerald-500',
                icon: '🌿',
                description: 'Air quality is satisfactory'
            }
        }
        // Level 2: Fair (51-100)
        else if (numericAqi <= 100) {
            return {
                value: numericAqi,
                level: 'Fair',
                levelNumber: 2,
                color: 'text-yellow-400',
                bgColor: 'from-yellow-400/20 to-orange-400/20',
                borderColor: 'border-yellow-300/30',
                progressColor: 'from-yellow-400 to-orange-500',
                icon: '⚠️',
                description: 'Air quality is acceptable'
            }
        }
        // Level 3: Poor (101-150)
        else if (numericAqi <= 150) {
            return {
                value: numericAqi,
                level: 'Poor',
                levelNumber: 3,
                color: 'text-orange-400',
                bgColor: 'from-orange-400/20 to-red-400/20',
                borderColor: 'border-orange-300/30',
                progressColor: 'from-orange-400 to-red-500',
                icon: '😷',
                description: 'Sensitive groups may experience health effects'
            }
        }
        // Level 4: Very Poor (151-200)
        else if (numericAqi <= 200) {
            return {
                value: numericAqi,
                level: 'Very Poor',
                levelNumber: 4,
                color: 'text-red-400',
                bgColor: 'from-red-400/20 to-pink-400/20',
                borderColor: 'border-red-300/30',
                progressColor: 'from-red-400 to-pink-500',
                icon: '🚨',
                description: 'Everyone may experience health effects'
            }
        }
        // Level 5: Extremely Poor (201+)
        else {
            return {
                value: numericAqi,
                level: 'Extremely Poor',
                levelNumber: 5,
                color: 'text-purple-400',
                bgColor: 'from-purple-400/20 to-violet-400/20',
                borderColor: 'border-purple-300/30',
                progressColor: 'from-purple-400 to-violet-500',
                icon: '💀',
                description: 'Health warnings of emergency conditions'
            }
        }
    }

    const aqiInfo = getAQIInfo(weatherData?.aqi)
    const containerVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
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

    const leafVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 150
            }
        }
    }

    const numberVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 200
            }
        }
    }

    return (
        <motion.div
            className='mt-10 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl relative overflow-hidden'
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
            {/* Dynamic floating particles based on AQI level */}
            <motion.div
                className={`absolute top-3 right-3 w-4 h-4 ${aqiInfo.levelNumber === 1 ? 'bg-green-400/40' : aqiInfo.levelNumber === 2 ? 'bg-yellow-400/40' : aqiInfo.levelNumber === 3 ? 'bg-orange-400/40' : aqiInfo.levelNumber === 4 ? 'bg-red-400/40' : 'bg-purple-400/40'} rounded-full blur-sm`}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    x: [0, 10, 0],
                    y: [0, -5, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className={`absolute bottom-4 left-4 w-3 h-3 ${aqiInfo.levelNumber === 1 ? 'bg-emerald-400/30' : aqiInfo.levelNumber === 2 ? 'bg-yellow-400/30' : aqiInfo.levelNumber === 3 ? 'bg-orange-400/30' : aqiInfo.levelNumber === 4 ? 'bg-red-400/30' : 'bg-purple-400/30'} rounded-full blur-sm`}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.7, 0.3],
                    x: [0, -8, 0],
                    y: [0, 8, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='relative z-10'>
                <motion.h2
                    className='text-xl font-bold text-white mb-6'
                    variants={itemVariants}
                >
                    Air Quality Index
                </motion.h2>

                <motion.div
                    className='flex gap-6 items-center justify-between'
                    variants={itemVariants}
                >
                    <div className="space-y-3">
                        {/* AQI Value and Level */}
                        <div className="flex items-center gap-4">
                            <motion.p
                                className={`font-bold ${aqiInfo.color} text-4xl`}
                                variants={numberVariants}
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: `0 0 20px ${aqiInfo.color.replace('text-', 'rgba(').replace('-400', ', 0.6)')}`
                                }}
                            >
                                {aqiInfo.value}
                            </motion.p>
                            
                            {/* Level Badge */}
                            <motion.div
                                className={`px-3 py-1 rounded-full ${aqiInfo.bgColor} border ${aqiInfo.borderColor}`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            >
                                <span className={`${aqiInfo.color} font-bold text-sm`}>
                                    Level {aqiInfo.levelNumber}
                                </span>
                            </motion.div>
                        </div>

                        {/* Level Name and Description */}
                        <motion.div
                            className="space-y-2"
                            variants={itemVariants}
                        >
                            {/* <motion.p
                                className={`${aqiInfo.color.replace('400', '300')} font-bold text-xl`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                {aqiInfo.icon} {aqiInfo.level} "hello world"
                            </motion.p> */}
                            
                            <motion.p
                                className="text-white/70 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                {aqiInfo.description}
                            </motion.p>

                            {/* Dynamic Progress Bar */}
                            <motion.div
                                className="w-full h-2 bg-white/20 rounded-full mt-3 overflow-hidden"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <motion.div
                                    className={`h-full bg-gradient-to-r ${aqiInfo.progressColor} rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(aqiInfo.levelNumber / 5) * 100}%` }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 1.5,
                                        ease: "easeOut"
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative"
                        variants={leafVariants}
                    >
                        {/* Dynamic Icon based on AQI Level */}
                        <motion.div
                            className="w-16 h-16 flex items-center justify-center text-4xl"
                            animate={{
                                rotate: [0, 5, -5, 0],
                                y: [0, -3, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 15
                            }}
                        >
                            {aqiInfo.icon}
                        </motion.div>

                        {/* Dynamic glowing ring based on AQI level */}
                        <motion.div
                            className={`absolute inset-0 rounded-full border-2 ${aqiInfo.levelNumber === 1 ? 'border-green-400/30' : aqiInfo.levelNumber === 2 ? 'border-yellow-400/30' : aqiInfo.levelNumber === 3 ? 'border-orange-400/30' : aqiInfo.levelNumber === 4 ? 'border-red-400/30' : 'border-purple-400/30'}`}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0, 0.6, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default AirQualityCard
