import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WeatherAlerts from './WeatherAlerts'

function MLPredictionDemo() {
    const [currentScenario, setCurrentScenario] = useState(0)
    
    const scenarios = [
        {
            name: "Normal Conditions",
            mlPrediction: {
                alert_class: "success",
                confidence: 0.9999998807907104,
                event: "normal",
                predicted_wind_speed: -0.4439336955547333,
                reason: "Stable conditions"
            },
            weatherData: {
                temperature: 25,
                humidity: 60,
                wind_speed: 5,
                weather: "clear sky",
                aqi: 45
            }
        },
        {
            name: "Warning Conditions",
            mlPrediction: {
                alert_class: "warning",
                confidence: 0.85,
                event: "moderate_wind",
                predicted_wind_speed: 15.2,
                reason: "Increasing wind patterns detected"
            },
            weatherData: {
                temperature: 28,
                humidity: 75,
                wind_speed: 12,
                weather: "partly cloudy",
                aqi: 78
            }
        },
        {
            name: "Danger Conditions",
            mlPrediction: {
                alert_class: "danger",
                confidence: 0.92,
                event: "severe_storm",
                predicted_wind_speed: 35.8,
                reason: "Severe weather system approaching"
            },
            weatherData: {
                temperature: 22,
                humidity: 90,
                wind_speed: 25,
                weather: "thunderstorm",
                aqi: 120
            }
        },
        {
            name: "High Confidence Alert",
            mlPrediction: {
                alert_class: "warning",
                confidence: 0.98,
                event: "heat_wave",
                predicted_wind_speed: 2.1,
                reason: "Extreme temperature rise predicted"
            },
            weatherData: {
                temperature: 38,
                humidity: 45,
                wind_speed: 3,
                weather: "sunny",
                aqi: 95
            }
        }
    ]

    const currentData = scenarios[currentScenario]

    return (
        <motion.div
            className="max-w-4xl mx-auto py-4 sm:py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-3xl font-bold text-white mb-4">
                    ML Weather Prediction Demo
                </h1>
                <p className="text-white/80 text-lg">
                    Interactive demonstration of AI-powered weather alerts with color-coded confidence levels
                </p>
            </motion.div>

            {/* Scenario Selector */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
            >
                {scenarios.map((scenario, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentScenario(index)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                            currentScenario === index
                                ? 'bg-white/20 text-white border-2 border-white/50'
                                : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/15'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {scenario.name}
                    </motion.button>
                ))}
            </motion.div>

            {/* Current Scenario Info */}
            <motion.div
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 mb-8"
                key={currentScenario}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-xl font-bold text-white mb-4">
                    {currentData.name} - ML Prediction Data
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white/90 mb-2">ML Prediction:</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-white/70">Alert Class:</span>
                                <span className={`font-semibold ${
                                    currentData.mlPrediction.alert_class === 'success' ? 'text-green-300' :
                                    currentData.mlPrediction.alert_class === 'warning' ? 'text-yellow-300' :
                                    'text-red-300'
                                }`}>
                                    {currentData.mlPrediction.alert_class}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/70">Confidence:</span>
                                <span className="text-white font-semibold">
                                    {Math.round(currentData.mlPrediction.confidence * 100)}%
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/70">Event:</span>
                                <span className="text-white font-semibold">
                                    {currentData.mlPrediction.event}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white/70">Predicted Wind:</span>
                                <span className="text-white font-semibold">
                                    {currentData.mlPrediction.predicted_wind_speed.toFixed(2)} m/s
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white/90 mb-2">Reason:</h3>
                        <p className="text-white/80 text-sm italic">
                            "{currentData.mlPrediction.reason}"
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Weather Alerts Component */}
            <motion.div
                key={`alerts-${currentScenario}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <WeatherAlerts 
                    weatherData={currentData.weatherData} 
                    mlPrediction={currentData.mlPrediction} 
                />
            </motion.div>

            {/* Color Legend */}
            <motion.div
                className="mt-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <h3 className="text-lg font-semibold text-white mb-4">Alert Color Legend</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        <span className="text-white">Success - Normal conditions</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <span className="text-white">Warning - Caution advised</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <span className="text-white">Danger - Immediate attention</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MLPredictionDemo
