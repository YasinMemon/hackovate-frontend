import React from 'react'
import { motion } from 'framer-motion'

function LoadingSkeleton() {
    const skeletonVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        }
    }

    const shimmerVariants = {
        animate: {
            x: [-200, 200],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
            }
        }
    }

    return (
        <motion.div
            className="p-4 px-10 min-w-screen min-h-screen bg-gradient-to-br from-purple-400 via-blue-500 to-green-400"
            variants={skeletonVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header Skeleton */}
            <motion.div
                className="flex justify-between items-center mb-8"
                variants={itemVariants}
            >
                <div className="relative">
                    <div className="h-12 w-48 bg-white/20 rounded-lg overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            variants={shimmerVariants}
                            animate="animate"
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="h-12 w-40 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            variants={shimmerVariants}
                            animate="animate"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Main Content Skeleton */}
            <motion.div
                className="flex gap-6"
                variants={itemVariants}
            >
                {/* Current Weather Skeleton */}
                <motion.div
                    className="w-full backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl"
                    variants={itemVariants}
                >
                    <div className="flex justify-between mb-8">
                        <div className="space-y-3">
                            <div className="h-6 w-32 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="h-4 w-40 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                        </div>
                        <div className="text-right space-y-2">
                            <div className="h-16 w-24 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="h-4 w-20 bg-white/20 rounded ml-auto overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                className="flex flex-col items-center space-y-3"
                                variants={itemVariants}
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        variants={shimmerVariants}
                                        animate="animate"
                                    />
                                </div>
                                <div className="h-4 w-16 bg-white/20 rounded overflow-hidden">
                                    <motion.div
                                        className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        variants={shimmerVariants}
                                        animate="animate"
                                    />
                                </div>
                                <div className="h-3 w-12 bg-white/20 rounded overflow-hidden">
                                    <motion.div
                                        className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        variants={shimmerVariants}
                                        animate="animate"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side Cards Skeleton */}
                <motion.div
                    className="w-full space-y-4"
                    variants={itemVariants}
                >
                    {[1, 2].map((card) => (
                        <motion.div
                            key={card}
                            className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl"
                            variants={itemVariants}
                        >
                            <div className="h-6 w-32 bg-white/20 rounded mb-4 overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <div className="h-8 w-16 bg-white/20 rounded overflow-hidden">
                                        <motion.div
                                            className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            variants={shimmerVariants}
                                            animate="animate"
                                        />
                                    </div>
                                    <div className="h-4 w-12 bg-white/20 rounded overflow-hidden">
                                        <motion.div
                                            className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            variants={shimmerVariants}
                                            animate="animate"
                                        />
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        variants={shimmerVariants}
                                        animate="animate"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Weather Alerts Skeleton */}
                <motion.div
                    className="w-full backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl mt-10"
                    variants={itemVariants}
                >
                    <div className="h-6 w-32 bg-white/20 rounded mb-6 overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            variants={shimmerVariants}
                            animate="animate"
                        />
                    </div>
                    {[1, 2].map((alert) => (
                        <motion.div
                            key={alert}
                            className="bg-white/10 p-4 rounded-xl mb-4 overflow-hidden"
                            variants={itemVariants}
                        >
                            <div className="h-4 w-20 bg-white/20 rounded mb-2 overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="h-5 w-32 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* 7-Day Forecast Skeleton */}
            <motion.div
                className="mt-8 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl"
                variants={itemVariants}
            >
                <div className="h-8 w-40 bg-white/20 rounded mb-6 overflow-hidden">
                    <motion.div
                        className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        variants={shimmerVariants}
                        animate="animate"
                    />
                </div>
                <div className="flex gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <motion.div
                            key={day}
                            className="backdrop-blur-lg bg-white/10 border border-white/20 p-4 rounded-xl min-w-[140px] space-y-3"
                            variants={itemVariants}
                        >
                            <div className="h-4 w-16 bg-white/20 rounded overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-full mx-auto overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                            <div className="h-5 w-12 bg-white/20 rounded mx-auto overflow-hidden">
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    variants={shimmerVariants}
                                    animate="animate"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default LoadingSkeleton