import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import NotFoundPage from './pages/not-found/NotFoundPage'
import BlogPage from './pages/blog/BlogPage'
import Layout from './layouts/Layout'
import './App.css'

function App() {
  return (
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );

}

export default App
