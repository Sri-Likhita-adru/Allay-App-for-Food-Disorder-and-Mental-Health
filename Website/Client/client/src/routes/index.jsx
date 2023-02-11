import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Resources from '../pages/Resources';
import Activities from '../pages/Activities';
import CalorieCalc from '../pages/CalorieCalc';
import MealRecomm from "../pages/MealRecommendation"
import Report from "../pages/DailyReport"
// import FoodDisorder from '../pages/FoodDisorder';
// import MentalHealth from '../pages/MentalHealth';
import TherapySessions from '../pages/TherapySessions';
import BookTherapy from '../pages/BookTherapy';
import Yoga from '../pages/Yoga';
import Journal from "../pages/Journal"
// import MyProgress from '../pages/MyProgress';

import Chatbot from '../components/Chatbot';

function Index() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/calorieCalc" element={<CalorieCalc />} />
                <Route path="/meal" element={<MealRecomm />} />
                <Route path="/report" element={<Report />} />
                <Route path="/therapysessions" element={<TherapySessions />} />
                <Route path="/booktherapy" element={<BookTherapy />} />
                <Route path="/yoga" element={<Yoga />} />
                <Route path="/journal" element={<Journal />} />
            </Routes>
            <Chatbot />
        </BrowserRouter>
    );
}

export default Index;
