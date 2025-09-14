import React from 'react'
import { motion } from 'framer-motion'

function AlertCard({ alert, index }) {
    const getGradientColors = (type, alertClass, isMLPrediction) => {
        // ML Prediction specific colors
        if (isMLPrediction) {
            switch (alertClass) {
                case 'success':
                    return {
                        gradient: 'from-green-400/30 to-emerald-400/30',
                        border: 'border-green-300/50',
                        textColor: 'text-green-100',
                        valueColor: 'text-green-200',
                        iconBg: 'bg-green-500/20',
                        progressBg: 'bg-green-500/30',
                        progressFill: 'bg-green-400'
                    }
                case 'warning':
                    return {
                        gradient: 'from-yellow-400/30 to-amber-400/30',
                        border: 'border-yellow-300/50',
                        textColor: 'text-yellow-100',
                        valueColor: 'text-yellow-200',
                        iconBg: 'bg-yellow-500/20',
                        progressBg: 'bg-yellow-500/30',
                        progressFill: 'bg-yellow-400'
                    }
                case 'danger':
                    return {
                        gradient: 'from-red-400/30 to-rose-400/30',
                        border: 'border-red-300/50',
                        textColor: 'text-red-100',
                        valueColor: 'text-red-200',
                        iconBg: 'bg-red-500/20',
                        progressBg: 'bg-red-500/30',
                        progressFill: 'bg-red-400'
                    }
                default:
                    return {
                        gradient: 'from-blue-400/30 to-indigo-400/30',
                        border: 'border-blue-300/50',
                        textColor: 'text-blue-100',
                        valueColor: 'text-blue-200',
                        iconBg: 'bg-blue-500/20',
                        progressBg: 'bg-blue-500/30',
                        progressFill: 'bg-blue-400'
                    }
            }
        }

        // Regular alert colors
        switch (type) {
            case 'uv':
                return {
                    gradient: 'from-yellow-400/20 to-orange-400/20',
                    border: 'border-yellow-300/30',
                    textColor: 'text-yellow-100',
                    valueColor: 'text-yellow-200',
                    iconBg: 'bg-yellow-500/20',
                    progressBg: 'bg-yellow-500/20',
                    progressFill: 'bg-yellow-400'
                }
            case 'wind':
                return {
                    gradient: 'from-blue-400/20 to-cyan-400/20',
                    border: 'border-blue-300/30',
                    textColor: 'text-blue-100',
                    valueColor: 'text-blue-200',
                    iconBg: 'bg-blue-500/20',
                    progressBg: 'bg-blue-500/20',
                    progressFill: 'bg-blue-400'
                }
            case 'rain':
                return {
                    gradient: 'from-indigo-400/20 to-purple-400/20',
                    border: 'border-indigo-300/30',
                    textColor: 'text-indigo-100',
                    valueColor: 'text-indigo-200',
                    iconBg: 'bg-indigo-500/20',
                    progressBg: 'bg-indigo-500/20',
                    progressFill: 'bg-indigo-400'
                }
            default:
                return {
                    gradient: 'from-gray-400/20 to-gray-600/20',
                    border: 'border-gray-300/30',
                    textColor: 'text-gray-100',
                    valueColor: 'text-gray-200',
                    iconBg: 'bg-gray-500/20',
                    progressBg: 'bg-gray-500/20',
                    progressFill: 'bg-gray-400'
                }
        }
    }

    const colors = getGradientColors(alert.type, alert.alertClass, alert.isMLPrediction)

    return (
        <motion.div
            className={`p-5 bg-gradient-to-r ${colors.gradient} backdrop-blur-sm rounded-xl border ${colors.border} ${index > 0 ? 'mb-4' : ''} ${alert.isMLPrediction ? 'ring-2 ring-opacity-50' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Header with icon and label */}
            <div className="flex items-center justify-between mb-3">
                <motion.span
                    className={`text-sm ${colors.textColor} flex items-center gap-2`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2 + index * 0.5, repeat: Infinity }}
                >
                    {alert.isMLPrediction && (
                        <span className={`px-2 py-1 rounded-full text-xs ${colors.iconBg} ${colors.textColor}`}>
                            {alert.icon}
                        </span>
                    )}
                    {alert.label}
                </motion.span>
                
                {/* ML Prediction Badge */}
                {alert.isMLPrediction && (
                    <motion.span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${colors.iconBg} ${colors.textColor}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.2 }}
                    >
                        AI
                    </motion.span>
                )}
            </div>

            {/* Main message */}
            <motion.p
                className={`font-bold ${colors.valueColor} text-lg mb-2`}
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
            >
                {alert.message}
            </motion.p>

            {/* ML Prediction specific content */}
            {alert.isMLPrediction && (
                <div className="space-y-3">
                    {/* Reason */}
                    {alert.reason && (
                        <motion.p
                            className={`text-sm ${colors.textColor} opacity-90`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ delay: 1.4 + index * 0.2 }}
                        >
                            {alert.reason}
                        </motion.p>
                    )}

                    {/* Confidence Progress Bar */}
                    {alert.confidence && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className={`text-xs ${colors.textColor} opacity-80`}>
                                    Confidence
                                </span>
                                <span className={`text-xs font-semibold ${colors.valueColor}`}>
                                    {Math.round(alert.confidence * 100)}%
                                </span>
                            </div>
                            <div className={`w-full h-2 ${colors.progressBg} rounded-full overflow-hidden`}>
                                <motion.div
                                    className={`h-full ${colors.progressFill} rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${alert.confidence * 100}%` }}
                                    transition={{ delay: 1.6 + index * 0.2, duration: 1, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Predicted Wind Speed */}
                    {alert.predictedWindSpeed !== undefined && (
                        <motion.div
                            className={`text-sm ${colors.textColor} opacity-90`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ delay: 1.8 + index * 0.2 }}
                        >
                            <span className="opacity-70">Predicted Wind Speed: </span>
                            <span className="font-semibold">{alert.predictedWindSpeed.toFixed(2)} m/s</span>
                        </motion.div>
                    )}
                </div>
            )}
        </motion.div>
    )
}

export default AlertCard