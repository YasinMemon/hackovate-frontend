import React from 'react'
import { motion } from 'framer-motion'

function Header({ city = "New York, NY" }) {
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
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {'Noorix'.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        custom={index}
                        className="inline-block"
                        whileHover={{
                            y: -10,
                            color: "#fbbf24",
                            transition: { duration: 0.2 }
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
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
                <motion.span
                    className="text-lg font-semibold text-white drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {city}
                </motion.span>
            </motion.div>
        </header>
    )
}

export default Header
