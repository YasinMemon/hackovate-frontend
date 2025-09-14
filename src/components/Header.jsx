import React from 'react'
import { motion } from 'framer-motion'

function Header({ city = "New York, NY", cities = [], selectedCity, onCityChange }) {
    const titleVariants = {
        hidden: { opacity: 0, y: -50, scale: 0.5 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    }

    const locationVariants = {
        hidden: { opacity: 0, x: 100, rotate: 5 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    return (
        <header className="relative">
            <motion.h1
                className="text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            >
                Noorix
            </motion.h1>

            <motion.div
                className='absolute flex justify-center gap-3 backdrop-blur-lg bg-white/20 border border-white/30 px-6 py-3 rounded-2xl items-center right-5 top-5 shadow-2xl'
                variants={locationVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <motion.img
                    src="location.png"
                    alt="location"
                    className="w-5 h-5"
                    loading="lazy"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                />
                {cities && cities.length > 0 ? (
                    <select
                        value={selectedCity}
                        onChange={(e) => onCityChange(e.target.value)}
                        className="bg-transparent text-white font-semibold text-lg border-none outline-none cursor-pointer appearance-none pr-2 hover:text-blue-200 transition-colors duration-200"
                        style={{
                            background: 'transparent',
                            color: 'white',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}
                    >
                        {cities.map((cityOption) => (
                            <option
                                key={cityOption.value}
                                value={cityOption.value}
                                className="bg-gray-800 text-white hover:bg-gray-700"
                            >
                                {cityOption.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <motion.span
                        className="text-lg font-semibold text-white drop-shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {city}
                    </motion.span>
                )}
            </motion.div>
        </header>
    )
}

export default Header
