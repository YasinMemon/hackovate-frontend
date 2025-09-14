import React from 'react'
import { motion } from 'framer-motion'

function MLPredictionProgress({ prediction }) {
    if (!prediction) return null

    const getProgressColor = (alertClass, confidence) => {
        switch (alertClass) {
            case 'success':
                return {
                    bg: 'bg-green-500',
                    bgLight: 'bg-green-500/20',
                    text: 'text-green-100',
                    border: 'border-green-400/50'
                }
            case 'warning':
                return {
                    bg: 'bg-yellow-500',
                    bgLight: 'bg-yellow-500/20',
                    text: 'text-yellow-100',
                    border: 'border-yellow-400/50'
                }
            case 'danger':
                return {
                    bg: 'bg-red-500',
                    bgLight: 'bg-red-500/20',
                    text: 'text-red-100',
                    border: 'border-red-400/50'
                }
            default:
                return {
                    bg: 'bg-blue-500',
                    bgLight: 'bg-blue-500/20',
                    text: 'text-blue-100',
                    border: 'border-blue-400/50'
                }
        }
    }

    const getEventIcon = (event) => {
        switch (event) {
            case 'normal':
                return '✅'
            case 'warning':
                return '⚠️'
            case 'danger':
                return '🚨'
            default:
                return '🤖'
        }
    }

    const colors = getProgressColor(prediction.alert_class, prediction.confidence)
    const confidencePercentage = Math.round(prediction.confidence * 100)
    const icon = getEventIcon(prediction.event)

    return (
        <div className="mt-3">
            {/* Confidence Progress Bar */}
            <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                    <span className={`text-xs ${colors.text} font-medium`}>
                        AI Confidence
                    </span>
                    <span className={`text-xs ${colors.text} font-bold`}>
                        {confidencePercentage}%
                    </span>
                </div>
                <div className={`w-full h-2 ${colors.bgLight} rounded-full overflow-hidden border ${colors.border}`}>
                    <motion.div
                        className={`h-full ${colors.bg} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${confidencePercentage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    />
                </div>
            </div>

            {/* Prediction Details */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className={`text-xs ${colors.text} font-medium`}>
                        {icon} Event Type
                    </span>
                    <span className={`text-xs ${colors.text} font-bold capitalize`}>
                        {prediction.event}
                    </span>
                </div>

                {prediction.predicted_wind_speed !== undefined && (
                    <div className="flex items-center justify-between">
                        <span className={`text-xs ${colors.text} font-medium`}>
                            🌪️ Wind Prediction
                        </span>
                        <span className={`text-xs ${colors.text} font-bold`}>
                            {prediction.predicted_wind_speed > 0 ? '+' : ''}{prediction.predicted_wind_speed.toFixed(2)} km/h
                        </span>
                    </div>
                )}

                <div className="pt-2 border-t border-white/10">
                    <span className={`text-xs ${colors.text} font-medium italic`}>
                        "{prediction.reason}"
                    </span>
                </div>
            </div>

            {/* Status Indicator */}
            <motion.div
                className={`mt-3 px-3 py-1 rounded-full ${colors.bgLight} border ${colors.border} text-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <span className={`text-xs ${colors.text} font-bold uppercase tracking-wide`}>
                    {prediction.alert_class} Conditions
                </span>
            </motion.div>
        </div>
    )
}

export default MLPredictionProgress
