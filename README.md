# 🌾 Kisan.JI - Smart Agriculture Platform

<div align="center">
  <img src="frontend/public/images/1i.png" alt="Kisan.JI Logo" width="200"/>
  
  **AI-Powered Agricultural Assistant for Indian Farmers**
  
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
  [![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?logo=google)](https://ai.google.dev/)
</div>

---

## ✨ Features

### 🤖 AI-Powered Assistant
- **Gemini AI Integration** - Smart chatbot for farming queries
- **Voice Assistant** - Multilingual voice support (Hindi, Marathi, Tamil, Telugu, etc.)
- **Text-to-Speech** - Audio responses in regional languages

### 🌱 Crop Management
- **Disease Detection** - ONNX model-based plant disease identification
- **Pest Detection** - YOLOv8-powered pest identification
- **Crop Recommendation** - AI-based crop suggestions based on soil & weather

### 📊 Market Intelligence
- **Live Mandi Prices** - Real-time market prices from eNAM API
- **Weather Forecasts** - OpenWeatherMap integration with farming alerts
- **Price Trends** - Historical price analysis

### 💊 Farm Tools
- **Fertilizer Calculator** - NPK-based fertilizer recommendations
- **Pesticide Calculator** - Safe dosage calculations
- **Spray Scheduling** - Weather-aware spray timing

### 🔔 Smart Alerts
- **GNN-Based Network** - Graph Neural Network for farmer alert propagation
- **Weather Alerts** - Frost, rain, and extreme weather warnings
- **Disease Outbreak Alerts** - Community-wide disease notifications

### 🏛️ Government Schemes
- **PM-KISAN** - Direct benefit information
- **Crop Insurance** - PMFBY scheme details
- **Subsidies** - State-wise subsidy information

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ & npm
- Python 3.11+
- MongoDB Atlas account
- Google Gemini API key
- OpenWeatherMap API key

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/kisanji.git
cd kisanji
```

2. **Setup Backend**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
python server.py
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```

4. **Access the app**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api
- API Docs: http://localhost:8000/docs

---

## 🌐 Deployment

### Backend (Render)

1. Create a new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the following:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
4. Add environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `DB_NAME`: `echoharvest_db`
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `WEATHER_API_KEY`: Your OpenWeatherMap API key

### Frontend (Vercel)

1. Create a new project on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Set the following:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Add environment variable:
   - `REACT_APP_API_URL`: Your Render backend URL + `/api`
     (e.g., `https://kisanji-backend.onrender.com/api`)

---

## 📁 Project Structure

```
kisanji/
├── backend/
│   ├── server.py           # FastAPI main server
│   ├── agri_brain.py       # Gemini AI integration
│   ├── vision_engine.py    # Disease detection
│   ├── alert_service.py    # GNN alert network
│   ├── crop_recommender.py # ML crop recommendations
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service
│   │   └── contexts/       # React contexts
│   ├── public/
│   │   └── images/         # Background images
│   └── package.json
└── README.md
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
MONGO_URL=mongodb+srv://...
DB_NAME=echoharvest_db
GEMINI_API_KEY=your_key
WEATHER_API_KEY=your_key
```

### Frontend (.env.local)
```env
REACT_APP_API_URL=http://localhost:8000/api
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <p>Made with ❤️ for Indian Farmers</p>
  <p><strong>Kisan.JI</strong> - किसान जी</p>
</div>
