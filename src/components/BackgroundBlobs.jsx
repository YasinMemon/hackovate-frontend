import React from 'react'
import { motion } from 'framer-motion'

function BackgroundBlobs() {
    const blobs = [
        {
            className: "absolute top-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl",
            animate: {
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        },
        {
            className: "absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl",
            animate: {
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1.2, 1, 1.2],
            },
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        },
        {
            className: "absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/15 rounded-full blur-3xl",
            animate: {
                x: [-50, 50, -50],
                y: [30, -30, 30],
                scale: [1, 1.3, 1],
            },
            transition: {
                duration: 18,
                repeat: Infinity,
                ease: "linear"
            }
        }
    ]

    return (
        <>
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className={blob.className}
                    animate={blob.animate}
                    transition={blob.transition}
                />
            ))}
        </>
    )
}

export default BackgroundBlobs