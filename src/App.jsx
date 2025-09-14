import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import CurrenWeatherCard from './components/CurrenWeatherCard'
import SevenDays from './components/SevenDays'
import RightSideCards from './components/RightSideCards'
import LoadingSkeleton from './components/LoadingSkeleton'
import MainLayout from './components/MainLayout'
import WeatherAlerts from './components/WeatherAlerts'
import RefreshButton from './components/RefreshButton'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setError(null)
        const response = await fetch("http://localhost:5000/api/weather")

        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }

        const data = await response.json()
        setWeatherData(data)
        console.log(data)
      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError(err.message)

        // Use mock data for development/demo
        setWeatherData({
          city: 'Ahmedabad',
          current: {
            aqi: 'N/A',
            humidity: 62,
            sunrise: '06:25:34',
            sunset: '18:45:46',
            temperature: 30.02,
            weather: 'haze',
            wind_speed: 3.09
          },
          forecast: [
            { date: '2025-09-13', temperature: { max: 29.97, min: 28.87 }, weather: 'scattered clouds' },
            { date: '2025-09-14', temperature: { max: 31.5, min: 27.2 }, weather: 'overcast clouds' },
            { date: '2025-09-15', temperature: { max: 32.1, min: 26.8 }, weather: 'overcast clouds' },
            { date: '2025-09-16', temperature: { max: 30.8, min: 27.5 }, weather: 'overcast clouds' },
            { date: '2025-09-17', temperature: { max: 29.3, min: 26.9 }, weather: 'overcast clouds' }
          ]
        })
      } finally {
        setTimeout(() => setIsLoading(false), 1500)
      }
    }
    getWeatherData()
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    const getWeatherData = async () => {
      try {
        setError(null)
        const response = await fetch("http://localhost:5000/api/weather")
        const data = await response.json()
        setWeatherData(data)
      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getWeatherData()
  }

  // Show loading skeleton while data is loading
  if (isLoading) {
    return <LoadingSkeleton />
  }

  // Show error state if no data and there's an error
  if (!weatherData && error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
            <p className="mb-6">{error}</p>
            <button
              onClick={handleRefresh}
              className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Header city={weatherData?.city} />
      <MainContent weatherData={weatherData} />
      <SevenDays forecast={weatherData?.forecast} />
      <RefreshButton onRefresh={handleRefresh} />
    </MainLayout>
  )
}


function MainContent({ weatherData }) {
  return (
    <motion.div
      className='flex gap-6 '
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
    >
      <CurrenWeatherCard weatherData={weatherData?.current} />
      <RightSideCards weatherData={weatherData?.current} />
      <WeatherAlerts weatherData={weatherData?.current} />
    </motion.div>
  )
}

export default App
