import { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import LoadingSkeleton from './components/LoadingSkeleton'
import MainLayout from './components/MainLayout'

// Lazy load components
const CurrenWeatherCard = lazy(() => import('./components/CurrenWeatherCard'))
const SevenDays = lazy(() => import('./components/SevenDays'))
const RightSideCards = lazy(() => import('./components/RightSideCards'))
const WeatherAlerts = lazy(() => import('./components/WeatherAlerts'))
const RefreshButton = lazy(() => import('./components/RefreshButton'))
const MLPredictionDemo = lazy(() => import('./components/MLPredictionDemo'))
const Guidance = lazy(() => import('./components/Guidance'))

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  const [mlPrediction, setMlPrediction] = useState(null)
  const [error, setError] = useState(null)
  const [selectedCity, setSelectedCity] = useState('ahmedabad')
  const [currentPage, setCurrentPage] = useState('homepage')

  const cities = [
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' }
  ]

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setError(null)
        
        // Fetch weather data
        const weatherResponse = await fetch('http://localhost:5000/api/weather', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ city: selectedCity })
        })

        if (!weatherResponse.ok) {
          throw new Error('Failed to fetch weather data')
        }

        const weatherData = await weatherResponse.json()
        setWeatherData(weatherData)

        // Fetch ML prediction data
        try {
          const mlResponse = await fetch('http://localhost:5000/api/ml-prediction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: selectedCity })
          })

          if (mlResponse.ok) {
            const mlData = await mlResponse.json()
            setMlPrediction(mlData.ml_prediction)
          }
        } catch (mlErr) {
          console.warn("ML prediction not available:", mlErr)
          // Use mock ML prediction data for demo
          setMlPrediction({
            alert_class: "success",
            confidence: 0.9999998807907104,
            event: "normal",
            predicted_wind_speed: -0.4439336955547333,
            reason: "Stable conditions"
          })
        }

      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError(err.message)

        // Use mock data for development/demo
        const selectedCityData = cities.find(city => city.value === selectedCity)
        setWeatherData({
          city: selectedCityData?.label || 'Ahmedabad',
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

        // Mock ML prediction data
        setMlPrediction({
          alert_class: "success",
          confidence: 0.9999998807907104,
          event: "normal",
          predicted_wind_speed: -0.4439336955547333,
          reason: "Stable conditions"
        })
      } finally {
        setTimeout(() => setIsLoading(false), 1500)
      }
    }
    getWeatherData()
  }, [selectedCity])

  const handleRefresh = () => {
    setIsLoading(true)
    const getWeatherData = async () => {
      try {
        setError(null)
        
        // Fetch weather data
        const weatherResponse = await fetch('http://localhost:5000/api/weather', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ city: selectedCity })
        })
        const weatherData = await weatherResponse.json()
        setWeatherData(weatherData)

        // Fetch ML prediction data
        try {
          const mlResponse = await fetch('http://localhost:5000/api/ml-prediction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: selectedCity })
          })

          if (mlResponse.ok) {
            const mlData = await mlResponse.json()
            setMlPrediction(mlData.ml_prediction)
          }
        } catch (mlErr) {
          console.warn("ML prediction not available:", mlErr)
        }
      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getWeatherData()
  }

  const handleCityChange = (cityValue) => {
    setSelectedCity(cityValue)
    setIsLoading(true)
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

  // Handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  // Render different pages based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'ml-demo':
        return (
          <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-96 mt-6"></div>}>
            <MLPredictionDemo />
          </Suspense>
        )
      case 'guidance':
        return (
          <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-96 mt-6"></div>}>
            <Guidance />
          </Suspense>
        )
      case 'homepage':
      default:
        return (
          <>
            <Header
              city={weatherData?.city}
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={handleCityChange}
              onRefresh={handleRefresh}
            />
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-64 mt-6"></div>}>
              <MainContent weatherData={weatherData} mlPrediction={mlPrediction} />
            </Suspense>
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-32 mt-8"></div>}>
              <SevenDays forecast={weatherData?.forecast} />
            </Suspense>
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-full w-12 h-12 mt-6 mx-auto"></div>}>
              <RefreshButton onRefresh={handleRefresh} />
            </Suspense>
          </>
        )
    }
  }

  return (
    <MainLayout>
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="pt-16 md:pt-20 w-full px-4 lg:px-8 xl:px-12">
        {renderPage()}
      </div>
    </MainLayout>
  )
}


function MainContent({ weatherData, mlPrediction }) {
  return (
    <motion.div
      className='flex flex-col lg:mt-20 lg:flex-row gap-4 lg:gap-6 mt-6 w-full'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
    >
      <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-80 w-full lg:flex-1"></div>}>
        <CurrenWeatherCard weatherData={weatherData?.current} />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-80 w-full lg:w-80"></div>}>
        <RightSideCards weatherData={weatherData?.current} />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-80 w-full lg:w-80"></div>}>
        <WeatherAlerts weatherData={weatherData?.current} mlPrediction={mlPrediction} />
      </Suspense>
    </motion.div>
  )
}

export default App
