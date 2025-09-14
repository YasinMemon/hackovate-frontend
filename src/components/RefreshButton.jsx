import React from 'react'
import { motion } from 'framer-motion'

function RefreshButton({ onRefresh }) {
    return (
        <motion.button
            className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl backdrop-blur-lg border border-white/20 items-center justify-center group z-50"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                backgroundColor: "rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onRefresh}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 2,
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
        >
            <RefreshIcon />
            <Tooltip />
        </motion.button>
    )
}

function RefreshIcon() {
    return (
        <motion.svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: 0 }}
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
    )
}

function Tooltip() {
    return (
        <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            Refresh Weather
        </motion.div>
    )
}

export default RefreshButton