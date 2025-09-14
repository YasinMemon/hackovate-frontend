import React from 'react'
import { motion } from 'framer-motion'

function AirQualityCard({ weatherData }) {
    // Function to get AQI level and color based on value
    const getAQIInfo = (aqi) => {
        if (!aqi || aqi === 'N/A') {
            return {
                value: 'N/A',
                level: 'Unknown',
                color: 'text-gray-400',
                bgColor: 'from-gray-400/20 to-gray-600/20',
                borderColor: 'border-gray-300/30'
            }
        }

        const numericAqi = parseInt(aqi)

        if (numericAqi <= 50) {
            return {
                value: numericAqi,
                level: 'Good',
                color: 'text-green-400',
                bgColor: 'from-green-400/20 to-emerald-400/20',
                borderColor: 'border-green-300/30'
            }
        } else if (numericAqi <= 100) {
            return {
                value: numericAqi,
                level: 'Moderate',
                color: 'text-yellow-400',
                bgColor: 'from-yellow-400/20 to-orange-400/20',
                borderColor: 'border-yellow-300/30'
            }
        } else if (numericAqi <= 150) {
            return {
                value: numericAqi,
                level: 'Unhealthy for Sensitive',
                color: 'text-orange-400',
                bgColor: 'from-orange-400/20 to-red-400/20',
                borderColor: 'border-orange-300/30'
            }
        } else if (numericAqi <= 200) {
            return {
                value: numericAqi,
                level: 'Unhealthy',
                color: 'text-red-400',
                bgColor: 'from-red-400/20 to-pink-400/20',
                borderColor: 'border-red-300/30'
            }
        } else {
            return {
                value: numericAqi,
                level: 'Very Unhealthy',
                color: 'text-purple-400',
                bgColor: 'from-purple-400/20 to-violet-400/20',
                borderColor: 'border-purple-300/30'
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
            {/* Floating green particles */}
            <motion.div
                className="absolute top-3 right-3 w-4 h-4 bg-green-400/40 rounded-full blur-sm"
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
                className="absolute bottom-4 left-4 w-3 h-3 bg-emerald-400/30 rounded-full blur-sm"
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
                    <div className="space-y-2">
                        <motion.p
                            className={`font-bold ${aqiInfo.color} text-4xl`}
                            variants={numberVariants}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 20px rgba(34, 197, 94, 0.6)"
                            }}
                        >
                            {aqiInfo.value}
                        </motion.p>
                        <motion.div
                            className="relative"
                            variants={itemVariants}
                        >
                            <motion.p
                                className={`${aqiInfo.color.replace('400', '300')} font-semibold text-lg`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                {aqiInfo.level}
                            </motion.p>

                            {/* Animated progress bar */}
                            <motion.div
                                className="w-16 h-1 bg-white/20 rounded-full mt-2 overflow-hidden"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "42%" }}
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
                        <motion.img
                            src="./icons/leave.png"
                            alt="leaf"
                            className="w-16 h-16 drop-shadow-lg"
                            loading="lazy"
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
                                rotate: 15,
                                filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))"
                            }}
                        />

                        {/* Glowing ring around the leaf */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-green-400/30"
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
