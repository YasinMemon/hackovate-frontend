import React from 'react'
import { motion } from 'framer-motion'

function SubCycleCard() {
    const containerVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
                staggerChildren: 0.15
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

    const sunVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 150
            }
        }
    }

    const timeVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.div
            className='mt-4 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl relative overflow-hidden'
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
            {/* Animated sun rays */}
            <motion.div
                className="absolute top-2 right-2 w-6 h-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-full h-full relative">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-0.5 h-3 bg-yellow-400/30 rounded-full"
                            style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '50% 6px',
                                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                            }}
                            animate={{
                                scaleY: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Floating golden particles */}
            <motion.div
                className="absolute bottom-4 left-6 w-2 h-2 bg-yellow-400/40 rounded-full"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='relative z-10'>
                <motion.h2
                    className='text-xl font-bold text-white mb-6'
                    variants={itemVariants}
                >
                    Sun Cycle
                </motion.h2>

                {/* Decorative sun arc */}
                <motion.div
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 w-24 h-12 border-2 border-yellow-400/30 rounded-t-full"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />

                <motion.div
                    className='flex gap-6 items-center justify-between pt-4'
                    variants={itemVariants}
                >
                    <motion.div
                        className="text-center"
                        variants={timeVariants}
                    >
                        <motion.div
                            className="relative mb-3"
                            variants={sunVariants}
                        >
                            {/* Sunrise icon effect */}
                            <motion.div
                                className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto relative"
                                animate={{
                                    boxShadow: [
                                        "0 0 10px rgba(251, 191, 36, 0.5)",
                                        "0 0 20px rgba(251, 191, 36, 0.8)",
                                        "0 0 10px rgba(251, 191, 36, 0.5)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 w-8 h-8 border-2 border-yellow-400/40 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        <motion.p
                            className='font-bold text-yellow-400 text-xl mb-1'
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 15px rgba(251, 191, 36, 0.6)"
                            }}
                        >
                            6:12 AM
                        </motion.p>
                        <motion.p
                            className='text-yellow-300/80 text-sm font-medium'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            Sunrise
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        variants={timeVariants}
                    >
                        <motion.div
                            className="relative mb-3"
                            variants={sunVariants}
                        >
                            {/* Sunset icon effect */}
                            <motion.div
                                className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto relative"
                                animate={{
                                    boxShadow: [
                                        "0 0 10px rgba(249, 115, 22, 0.5)",
                                        "0 0 20px rgba(249, 115, 22, 0.8)",
                                        "0 0 10px rgba(249, 115, 22, 0.5)"
                                    ]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 w-8 h-8 border-2 border-orange-400/40 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>

                        <motion.p
                            className='font-bold text-orange-400 text-xl mb-1'
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 15px rgba(249, 115, 22, 0.6)"
                            }}
                        >
                            7:45 PM
                        </motion.p>
                        <motion.p
                            className='text-orange-300/80 text-sm font-medium'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            Sunset
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default SubCycleCard
