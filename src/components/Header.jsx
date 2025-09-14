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
        <header className="w-full bg-white shadow-lg relative z-50">
            <nav className="w-full py-4">
                <div className="flex items-center justify-between w-full px-2 sm:px-4 lg:px-6">
                    {/* Logo Section */}
                    <motion.div
                        className="flex items-center"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <img 
                            src="./logo.png" 
                            alt="logo"
                            className="h-8 lg:h-10 w-auto"
                        />
                    </motion.div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <motion.a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Guidance
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Menu
                        </motion.button>
                    </div>

                    {/* City Selector Section */}
                    <motion.div
                        className='flex items-center gap-2 lg:gap-3 bg-gray-50 border border-gray-200 px-2 lg:px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200'
                        variants={locationVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "#f9fafb",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        <motion.img
                            src="location.png"
                            alt="location"
                            className="w-4 h-4 lg:w-5 lg:h-5"
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
                                className="bg-transparent text-gray-800 font-semibold text-sm lg:text-base border-none outline-none cursor-pointer appearance-none pr-2 hover:text-blue-600 transition-colors duration-200"
                            >
                                {cities.map((cityOption) => (
                                    <option
                                        key={cityOption.value}
                                        value={cityOption.value}
                                        className="bg-white text-gray-800 hover:bg-gray-100"
                                    >
                                        {cityOption.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <motion.span
                                className="text-sm lg:text-base font-semibold text-gray-800"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                {city}
                            </motion.span>
                        )}
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

export default Header
