import React from 'react'
import { motion } from 'framer-motion'
import AlertCard from './AlertCard'

function WeatherAlerts() {
    const alerts = [
        {
            type: 'uv',
            label: 'High UV',
            message: 'UV index is 8'
        },
        {
            type: 'wind',
            label: 'Wind',
            message: 'Wind is 15 km/h'
        }
    ]

    return (
        <motion.div
            className='backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 w-full mt-10 shadow-2xl'
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
                }
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <motion.h1
                className='font-bold text-xl text-white mb-6'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                Weather Alerts
            </motion.h1>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <AlertCard
                        key={alert.type}
                        alert={alert}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default WeatherAlerts