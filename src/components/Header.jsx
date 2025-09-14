import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Header({ city = "New York, NY", cities = [], selectedCity, onCityChange, onRefresh }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

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
<<<<<<< HEAD
        <header className="relative mb-8 lg:mb-12">
            {/* Logo */}
            

            {/* Title */}

            {/* Mobile Refresh Button */}
            {onRefresh && (
                <motion.button
                    className="md:hidden absolute left-2 top-2 w-10 h-10 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center backdrop-blur-lg"
                    onClick={onRefresh}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </motion.svg>
                </motion.button>
            )}

            <motion.div
                className='absolute lg:mt-2 flex justify-center gap-3 sm:gap-4 backdrop-blur-lg bg-gradient-to-r from-white/15 to-white/25 border border-white/40 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl items-center right-2 sm:right-5 top-2 sm:top-5 shadow-2xl z-10'
                variants={locationVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                {/* Location Icon */}
                <motion.div
                    className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                >
                    <motion.svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
=======
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
>>>>>>> c850965c35a6617b81d56d0165fbc7b64bc49046
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
<<<<<<< HEAD
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </motion.svg>
                </motion.div>

                {/* City Selection */}
                {cities && cities.length > 0 ? (
                    <div className="relative " ref={dropdownRef}>
                        {/* Selected City Display */}
                        <motion.button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-transparent text-white font-bold text-sm sm:text-lg border-none outline-none cursor-pointer pr-6 hover:text-blue-200 transition-all duration-300 focus:text-blue-300 flex items-center gap-2"
                            style={{
                                background: 'transparent',
                                color: 'white',
                                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                                fontWeight: '600'
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{cities.find(city => city.value === selectedCity)?.label || selectedCity}</span>
                            
                            {/* Custom Dropdown Arrow */}
                            <motion.div
                                className="pointer-events-none"
                                animate={{
                                    rotate: isDropdownOpen ? 180 : 0,
                                    y: [0, 2, 0]
                                }}
                                transition={{
                                    rotate: { duration: 0.3 },
                                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <svg
                                    className="w-4 h-4 text-white/80"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </motion.div>
                        </motion.button>

                        {/* Custom Dropdown Options */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    className="absolute top-full right-0 mt-2 w-48 backdrop-blur-lg bg-gradient-to-b from-gray-800/95 to-gray-900/95 border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    {cities.map((cityOption, index) => (
                                        <motion.button
                                            key={cityOption.value}
                                            onClick={() => {
                                                onCityChange(cityOption.value)
                                                setIsDropdownOpen(false)
                                            }}
                                            className={`w-full text-left px-4 py-3 font-semibold transition-all duration-300 border-b border-gray-700/30 last:border-b-0 ${
                                                selectedCity === cityOption.value
                                                    ? 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white'
                                                    : 'text-white/90 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-500/50 hover:text-white'
                                            }`}
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                                            }}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${
                                                    selectedCity === cityOption.value 
                                                        ? 'bg-blue-400' 
                                                        : 'bg-gray-500'
                                                }`} />
                                                <span>{cityOption.label}</span>
                                            </div>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.span
                        className="text-sm sm:text-lg font-bold text-white drop-shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        style={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                        }}
                    >
                        {city}
                    </motion.span>
                )}
            </motion.div>
=======
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
>>>>>>> c850965c35a6617b81d56d0165fbc7b64bc49046
        </header>
    )
}

export default Header
