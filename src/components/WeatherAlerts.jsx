import React from 'react'
import { motion } from 'framer-motion'
import AlertCard from './AlertCard'

function WeatherAlerts({ weatherData }) {
    // Function to generate dynamic alerts based on weather conditions
    const generateAlerts = (data) => {
        const alerts = []

        if (!data) {
            // Default alerts if no data
            return [
                { type: 'uv', label: 'UV Index', message: 'Data not available' },
                { type: 'wind', label: 'Wind Speed', message: 'Data not available' }
            ]
        }

        // Temperature alert
        if (data.temperature > 35) {
            alerts.push({
                type: 'uv',
                label: 'High Temperature',
                message: `Extreme heat at ${Math.round(data.temperature)}°C`
            })
        } else if (data.temperature < 5) {
            alerts.push({
                type: 'wind',
                label: 'Low Temperature',
                message: `Very cold at ${Math.round(data.temperature)}°C`
            })
        }

        // Wind speed alert
        if (data.wind_speed > 25) {
            alerts.push({
                type: 'wind',
                label: 'Strong Wind',
                message: `High winds at ${Math.round(data.wind_speed)} km/h`
            })
        } else if (data.wind_speed > 0) {
            alerts.push({
                type: 'wind',
                label: 'Wind Speed',
                message: `${Math.round(data.wind_speed)} km/h`
            })
        }

        // Humidity alert
        if (data.humidity > 80) {
            alerts.push({
                type: 'rain',
                label: 'High Humidity',
                message: `Very humid at ${data.humidity}%`
            })
        } else if (data.humidity < 30) {
            alerts.push({
                type: 'uv',
                label: 'Low Humidity',
                message: `Dry air at ${data.humidity}%`
            })
        }

        // Weather condition alerts
        if (data.weather) {
            const weather = data.weather.toLowerCase()
            if (weather.includes('rain') || weather.includes('storm')) {
                alerts.push({
                    type: 'rain',
                    label: 'Weather Alert',
                    message: `${data.weather.charAt(0).toUpperCase() + data.weather.slice(1)} conditions`
                })
            } else if (weather.includes('haze') || weather.includes('mist') || weather.includes('fog')) {
                alerts.push({
                    type: 'wind',
                    label: 'Visibility',
                    message: `Poor visibility due to ${data.weather}`
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
                    message: `Unhealthy air quality (AQI: ${numericAqi})`
                })
            }
        }

        // If no specific alerts, show current conditions
        if (alerts.length === 0) {
            alerts.push({
                type: 'uv',
                label: 'Current Conditions',
                message: `${Math.round(data.temperature)}°C, ${data.weather || 'Fair'}`
            })

            if (data.wind_speed > 0) {
                alerts.push({
                    type: 'wind',
                    label: 'Wind',
                    message: `${Math.round(data.wind_speed)} km/h`
                })
            }
        }

        return alerts.slice(0, 3) // Limit to 3 alerts max
    }

    const alerts = generateAlerts(weatherData)

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