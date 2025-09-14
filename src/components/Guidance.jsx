import React from 'react'
import { motion } from 'framer-motion'

function Guidance() {
    const sections = [
        {
            title: "Understanding Weather Alerts",
            icon: "🌤️",
            content: [
                "Weather alerts are generated using advanced machine learning models that analyze current weather conditions and predict potential changes.",
                "The system uses multiple data sources including temperature, humidity, wind speed, air quality, and atmospheric pressure.",
                "Alerts are color-coded: Green for normal conditions, Yellow for caution, and Red for dangerous situations."
            ]
        },
        {
            title: "ML Prediction System",
            icon: "🤖",
            content: [
                "Our AI model analyzes weather patterns and provides predictions with confidence levels.",
                "Confidence scores range from 0% to 100%, indicating how certain the model is about its prediction.",
                "The system continuously learns from new data to improve accuracy over time.",
                "Predictions include wind speed forecasts, weather event classifications, and risk assessments."
            ]
        },
        {
            title: "Alert Types & Meanings",
            icon: "⚠️",
            content: [
                "Success (Green): Normal weather conditions with stable patterns. No immediate action required.",
                "Warning (Yellow): Moderate weather changes expected. Stay alert and prepare for potential changes.",
                "Danger (Red): Severe weather conditions predicted. Take immediate protective measures.",
                "Each alert includes detailed reasoning and predicted values to help you understand the situation."
            ]
        },
        {
            title: "How to Use the System",
            icon: "📱",
            content: [
                "Navigate between different sections using the top navigation bar.",
                "View real-time weather data and ML predictions on the homepage.",
                "Test different scenarios using the ML Prediction Demo to understand how alerts work.",
                "Check the confidence levels and reasoning provided with each prediction.",
                "Use the refresh button to get the latest weather data and predictions."
            ]
        },
        {
            title: "Safety Guidelines",
            icon: "🛡️",
            content: [
                "Always follow official weather warnings from local meteorological services.",
                "Use our predictions as supplementary information, not as the sole source for weather decisions.",
                "In case of severe weather alerts, prioritize safety and follow emergency procedures.",
                "Keep emergency supplies ready during high-risk weather periods.",
                "Stay informed about local weather conditions through multiple sources."
            ]
        },
        {
            title: "Technical Information",
            icon: "⚙️",
            content: [
                "The system updates weather data every 15 minutes for optimal accuracy.",
                "ML predictions are generated using state-of-the-art neural networks.",
                "Data is processed in real-time to provide immediate insights.",
                "The system maintains high accuracy rates through continuous model training.",
                "All data is securely processed and stored following privacy standards."
            ]
        }
    ]

    return (
        <motion.div
            className="max-w-6xl mx-auto py-16 sm:py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">
                    Weather AI Guidance
                </h1>
                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                    Learn how to effectively use our AI-powered weather prediction system to stay informed and safe
                </p>
            </motion.div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">{section.icon}</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">
                                {section.title}
                            </h2>
                        </div>
                        
                        <div className="space-y-3">
                            {section.content.map((item, itemIndex) => (
                                <motion.p
                                    key={itemIndex}
                                    className="text-white/80 text-sm leading-relaxed"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 0.8, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                                >
                                    {item}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Tips Section */}
            <motion.div
                className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Quick Tips
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">✅</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Check Regularly</h3>
                        <p className="text-white/70 text-sm">Monitor weather alerts throughout the day for the most current information.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Understand Confidence</h3>
                        <p className="text-white/70 text-sm">Higher confidence percentages indicate more reliable predictions.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🚨</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Act on Red Alerts</h3>
                        <p className="text-white/70 text-sm">Take immediate action when you see red danger alerts.</p>
                    </div>
                </div>
            </motion.div>

            {/* Contact/Support Section */}
            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <p className="text-white/60 text-sm">
                    Need more help? Contact our support team or check our FAQ section for additional information.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Guidance
