import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/top-rated" element={<TopRatedPage />} />
                    <Route path="/upcoming" element={<UpcomingPage />} />
                    <Route path="/movie/:id" element={<MovieDetailPage />} />
                    <Route path="/search/:query" element={<SearchPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
