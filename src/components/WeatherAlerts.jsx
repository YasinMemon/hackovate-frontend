import React from 'react'
import { motion } from 'framer-motion'
import AlertCard from './AlertCard'

function WeatherAlerts({ weatherData, mlPrediction }) {
    // Function to generate dynamic alerts based on weather conditions and ML prediction
    const generateAlerts = (data, mlData) => {
        const alerts = []

        if (!data) {
            // Default alerts if no data
            return [
                { type: 'uv', label: 'UV Index', message: 'Data not available' },
                { type: 'wind', label: 'Wind Speed', message: 'Data not available' }
            ]
        }

        // ML Prediction Alert - Priority alert
        if (mlData) {
            const alertClass = mlData.alert_class
            const confidence = mlData.confidence
            const event = mlData.event
            const reason = mlData.reason
            const predictedWindSpeed = mlData.predicted_wind_speed

            // Determine alert type based on alert_class
            let alertType = 'success'
            let alertColor = 'green'
            let alertIcon = '✓'
            
            if (alertClass === 'warning') {
                alertType = 'warning'
                alertColor = 'yellow'
                alertIcon = '⚠'
            } else if (alertClass === 'danger') {
                alertType = 'danger'
                alertColor = 'red'
                alertIcon = '🚨'
            }

            alerts.push({
                type: alertType,
                alertClass: alertClass,
                color: alertColor,
                icon: alertIcon,
                label: 'ML Weather Prediction',
                message: `${event.charAt(0).toUpperCase() + event.slice(1)} Conditions`,
                reason: reason,
                confidence: confidence,
                predictedWindSpeed: predictedWindSpeed,
                isMLPrediction: true
            })
        }

        // Temperature alert
        if (data.temperature > 35) {
            alerts.push({
                type: 'uv',
                label: 'High Temperature',
                message: `Extreme heat at ${Math.round(data.temperature)}°C`,
                isMLPrediction: false
            })
        } else if (data.temperature < 5) {
            alerts.push({
                type: 'wind',
                label: 'Low Temperature',
                message: `Very cold at ${Math.round(data.temperature)}°C`,
                isMLPrediction: false
            })
        }

        // Wind speed alert
        if (data.wind_speed > 25) {
            alerts.push({
                type: 'wind',
                label: 'Strong Wind',
                message: `High winds at ${Math.round(data.wind_speed)} km/h`,
                isMLPrediction: false
            })
        } else if (data.wind_speed > 0) {
            alerts.push({
                type: 'wind',
                label: 'Wind Speed',
                message: `${Math.round(data.wind_speed)} km/h`,
                isMLPrediction: false
            })
        }

        // Humidity alert
        if (data.humidity > 80) {
            alerts.push({
                type: 'rain',
                label: 'High Humidity',
                message: `Very humid at ${data.humidity}%`,
                isMLPrediction: false
            })
        } else if (data.humidity < 30) {
            alerts.push({
                type: 'uv',
                label: 'Low Humidity',
                message: `Dry air at ${data.humidity}%`,
                isMLPrediction: false
            })
        }

        // Weather condition alerts
        if (data.weather) {
            const weather = data.weather.toLowerCase()
            if (weather.includes('rain') || weather.includes('storm')) {
                alerts.push({
                    type: 'rain',
                    label: 'Weather Alert',
                    message: `${data.weather.charAt(0).toUpperCase() + data.weather.slice(1)} conditions`,
                    isMLPrediction: false
                })
            } else if (weather.includes('haze') || weather.includes('mist') || weather.includes('fog')) {
                alerts.push({
                    type: 'wind',
                    label: 'Visibility',
                    message: `Poor visibility due to ${data.weather}`,
                    isMLPrediction: false
                })
            }
        }

        // AQI alert
        if (data.aqi && data.aqi !== 'N/A') {
            const numericAqi = parseInt(data.aqi)
            if (numericAqi > 100) {
                alerts.push({
                    type: 'uv',
                    label: 'Air Quality',
                    message: `Unhealthy air quality (AQI: ${numericAqi})`,
                    isMLPrediction: false
                })
            }
        }

        // If no specific alerts, show current conditions
        if (alerts.length === 0) {
            alerts.push({
                type: 'uv',
                label: 'Current Conditions',
                message: `${Math.round(data.temperature)}°C, ${data.weather || 'Fair'}`,
                isMLPrediction: false
            })

            if (data.wind_speed > 0) {
                alerts.push({
                    type: 'wind',
                    label: 'Wind',
                    message: `${Math.round(data.wind_speed)} km/h`,
                    isMLPrediction: false
                })
            }
        }

<<<<<<< HEAD
        return alerts.slice(0, 4) // Limit to 4 alerts max (including ML prediction)
=======
        // ML Prediction alerts - add these after other alerts
        if (data.ml_prediction) {
            const prediction = data.ml_prediction

            // Add ML prediction alert based on event type and confidence
            let alertType = 'ml'
            let alertMessage = ''
            let alertLabel = 'AI Weather Prediction'

            if (prediction.event === 'normal') {
                alertType = 'ml-success'
                alertMessage = `Stable weather conditions detected`
                alertLabel = '✅ AI Safety Confirmed'
            } else if (prediction.event === 'warning') {
                alertType = 'ml-warning'
                alertMessage = `Potential weather changes ahead`
                alertLabel = '⚠️ AI Weather Warning'
            } else if (prediction.event === 'danger') {
                alertType = 'ml-danger'
                alertMessage = `Severe weather conditions predicted`
                alertLabel = '🚨 AI Emergency Alert'
            } else {
                alertType = 'ml'
                alertMessage = `AI Analysis: ${prediction.event} - ${prediction.reason}`
                alertLabel = '🤖 AI Weather Analysis'
            }

            alerts.push({
                type: alertType,
                label: alertLabel,
                message: alertMessage
            })
        }

        // Prioritize ML prediction alerts - always include them if available
        const mlAlerts = alerts.filter(alert => alert.type.startsWith('ml'))
        const otherAlerts = alerts.filter(alert => !alert.type.startsWith('ml'))
        
        // If we have ML alerts, limit other alerts to make room
        const maxOtherAlerts = mlAlerts.length > 0 ? 3 : 4
        return [...otherAlerts.slice(0, maxOtherAlerts), ...mlAlerts]
>>>>>>> c850965c35a6617b81d56d0165fbc7b64bc49046
    }

    const alerts = generateAlerts(weatherData, mlPrediction)

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
                        mlPrediction={weatherData?.ml_prediction}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default WeatherAlerts