import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { LocationProvider } from '@/components/LocationPermission';
import { NotificationProvider } from '@/components/NotificationPermission';
import { BackgroundProvider } from '@/components/BackgroundSlider';
import Chatbot from '@/components/Chatbot';
import './App.css';

// Lazy load all pages for faster initial load (code splitting)
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const CropRecommendation = React.lazy(() => import('@/pages/CropRecommendation'));
const Weather = React.lazy(() => import('@/pages/Weather'));
const MarketPrices = React.lazy(() => import('@/pages/MarketPrices'));
const PestDetection = React.lazy(() => import('@/pages/PestDetection'));
const Community = React.lazy(() => import('@/pages/Community'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const DiseaseKnowledge = React.lazy(() => import('@/pages/DiseaseKnowledge'));
const Schemes = React.lazy(() => import('@/pages/Schemes'));
const Calculators = React.lazy(() => import('@/pages/Calculators'));
const ExpertContact = React.lazy(() => import('@/pages/ExpertContact'));
const Auth = React.lazy(() => import('@/pages/Auth'));

// Loading spinner for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-green-200 text-lg font-medium">Loading Kisan.JI...</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <LocationProvider>
          <NotificationProvider>
            <BrowserRouter>
              <BackgroundProvider>
                <div className="App min-h-screen">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/crop-recommendation" element={<CropRecommendation />} />
                      <Route path="/weather" element={<Weather />} />
                      <Route path="/market-prices" element={<MarketPrices />} />
                      <Route path="/pest-detection" element={<PestDetection />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/disease-knowledge" element={<DiseaseKnowledge />} />
                      <Route path="/schemes" element={<Schemes />} />
                      <Route path="/calculators" element={<Calculators />} />
                      <Route path="/expert-contact" element={<ExpertContact />} />
                    </Routes>
                  </Suspense>
                  <Chatbot />
                  <Toaster position="top-center" richColors />
                </div>
              </BackgroundProvider>
            </BrowserRouter>
          </NotificationProvider>
        </LocationProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
