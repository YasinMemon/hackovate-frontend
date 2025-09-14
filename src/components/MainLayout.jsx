import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackgroundBlobs from './BackgroundBlobs'

function MainLayout({ children }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.05,
                ease: "easeOut"
            }
        }
    }

    const backgroundStyle = {
        background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(139, 92, 246, 0.3) 0%, 
                rgba(59, 130, 246, 0.2) 25%, 
                rgba(16, 185, 129, 0.2) 50%, 
                rgba(245, 158, 11, 0.1) 75%, 
                rgba(139, 92, 246, 0.1) 100%
            ),
            linear-gradient(135deg, 
                #667eea 0%, 
                #764ba2 25%, 
                #f093fb 50%, 
                #f5576c 75%, 
                #4facfe 100%
            )
        `
    }

    return (
        <motion.div
            className='max-w-screen lg:px-6 overflow-x-hidden'
            style={backgroundStyle}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <BackgroundBlobs />

            <motion.div
                variants={containerVariants}
                className="relative z-10 min-w-screen"
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
export default MainLayout