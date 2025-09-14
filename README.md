# 🌤️ Noorix - Modern Weather Dashboard

A beautiful, responsive weather application built with React and Vite, featuring glass morphism design and real-time weather data.

![Weather Dashboard](https://img.shields.io/badge/Weather-Dashboard-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🌟 Core Features
- **Real-time Weather Data** - Get current weather conditions for multiple cities
- **7-Day Forecast** - Extended weather predictions with beautiful cards
- **Air Quality Index** - Monitor air quality with visual indicators
- **Weather Alerts** - Dynamic alerts based on current conditions
- **Sun Cycle Information** - Sunrise and sunset times with animated icons

### 🎨 Design Features
- **Glass Morphism UI** - Modern glass-like design with backdrop blur effects
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered animations
- **Interactive Elements** - Hover effects and micro-interactions
- **Custom Scrollbars** - Hidden scrollbars for clean appearance

### ⚡ Performance Features
- **Lazy Loading** - Components load on-demand for faster initial load
- **Image Optimization** - Lazy loading for all images
- **Code Splitting** - Reduced bundle size with dynamic imports
- **GPU Acceleration** - Hardware-accelerated animations
- **Progressive Loading** - Skeleton screens during loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend API server running on `http://localhost:5000`

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hackovate-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── AirQualityCard.jsx    # Air quality display
│   ├── AlertCard.jsx         # Weather alert cards
│   ├── BackgroundBlobs.jsx   # Animated background elements
│   ├── CurrenWeatherCard.jsx # Main weather display
│   ├── Header.jsx            # Navigation header
│   ├── LoadingSkeleton.jsx   # Loading states
│   ├── MainLayout.jsx        # Main layout wrapper
│   ├── RefreshButton.jsx     # Data refresh button
│   ├── RightSideCards.jsx    # Sidebar cards container
│   ├── SevenDays.jsx         # 7-day forecast
│   ├── SubCycleCard.jsx      # Sun cycle information
│   └── WeatherAlerts.jsx     # Weather alerts container
├── assets/              # Static assets
├── App.jsx              # Main application component
├── App.css              # Application styles
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## 🎯 Available Cities

The application supports weather data for the following cities:
- **Ahmedabad** - Default city
- **Delhi** - Capital city
- **Mumbai** - Financial capital
- **Bangalore** - Tech hub

## 🔧 API Integration

### Backend Requirements
The application expects a backend API running on `http://localhost:5000` with the following endpoint:

**POST** `/api/weather`

**Request Body:**
```json
{
  "city": "ahmedabad"
}
```

**Response Format:**
```json
{
  "city": "Ahmedabad",
  "current": {
    "temperature": 30.02,
    "weather": "haze",
    "humidity": 62,
    "wind_speed": 3.09,
    "aqi": "N/A",
    "sunrise": "06:25:34",
    "sunset": "18:45:46"
  },
  "forecast": [
    {
      "date": "2025-09-13",
      "temperature": {
        "max": 29.97,
        "min": 28.87
      },
      "weather": "scattered clouds"
    }
  ]
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Gradient blues and purples
- **Accent**: Glass morphism with white transparency
- **Text**: White with various opacity levels
- **Background**: Dynamic gradient with mouse interaction

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Cards**: Glass morphism with backdrop blur
- **Buttons**: Interactive with hover effects
- **Icons**: Custom weather icons with animations
- **Animations**: Framer Motion powered transitions

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## ⚡ Performance Optimizations

### Lazy Loading
- Components are loaded on-demand using React.lazy()
- Images use native lazy loading
- Suspense boundaries provide loading states

### Bundle Optimization
- Code splitting reduces initial bundle size
- Dynamic imports for non-critical components
- Optimized animations for better performance

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For utility-first styling
- **React** - For the component-based architecture
- **Vite** - For fast development and building

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ by the Hackovate Team**

*Built for modern web experiences with performance and accessibility in mind.*