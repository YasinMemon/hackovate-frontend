import React from 'react'
import { motion } from 'framer-motion'

function AlertCard({ alert, index }) {
    const getGradientColors = (type) => {
        switch (type) {
            case 'uv':
                return {
                    gradient: 'from-yellow-400/20 to-orange-400/20',
                    border: 'border-yellow-300/30',
                    textColor: 'text-yellow-100',
                    valueColor: 'text-yellow-200'
                }
            case 'wind':
                return {
                    gradient: 'from-blue-400/20 to-cyan-400/20',
                    border: 'border-blue-300/30',
                    textColor: 'text-blue-100',
                    valueColor: 'text-blue-200'
                }
            case 'rain':
                return {
                    gradient: 'from-indigo-400/20 to-purple-400/20',
                    border: 'border-indigo-300/30',
                    textColor: 'text-indigo-100',
                    valueColor: 'text-indigo-200'
                }
            case 'ml-success':
                return {
                    gradient: 'from-green-400/20 to-emerald-400/20',
                    border: 'border-green-300/30',
                    textColor: 'text-green-100',
                    valueColor: 'text-green-200'
                }
            case 'ml-warning':
                return {
                    gradient: 'from-amber-400/20 to-yellow-400/20',
                    border: 'border-amber-300/30',
                    textColor: 'text-amber-100',
                    valueColor: 'text-amber-200'
                }
            case 'ml-danger':
                return {
                    gradient: 'from-red-400/20 to-pink-400/20',
                    border: 'border-red-300/30',
                    textColor: 'text-red-100',
                    valueColor: 'text-red-200'
                }
            case 'ml':
                return {
                    gradient: 'from-purple-400/20 to-violet-400/20',
                    border: 'border-purple-300/30',
                    textColor: 'text-purple-100',
                    valueColor: 'text-purple-200'
                }
            default:
                return {
                    gradient: 'from-gray-400/20 to-gray-600/20',
                    border: 'border-gray-300/30',
                    textColor: 'text-gray-100',
                    valueColor: 'text-gray-200'
                }
        }
    }

    const colors = getGradientColors(alert.type)

    return (
        <motion.div
            className={`p-5 bg-gradient-to-r ${colors.gradient} backdrop-blur-sm rounded-xl border ${colors.border} ${index > 0 ? 'mb-4' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.span
                className={`text-sm ${colors.textColor} block mb-2`}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2 + index * 0.5, repeat: Infinity }}
            >
                {alert.label}
            </motion.span>
            <motion.p
                className={`font-bold ${colors.valueColor} text-lg`}
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
            >
                {alert.message}
            </motion.p>
        </motion.div>
    )
}

export default AlertCard