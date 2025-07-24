// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import NotFoundPage from './pages/not-found/NotFoundPage'
// import { Link } from 'react-router-dom' 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // <div className="min-h-screen bg-blue-100 flex items-center justify-center">
    //   <h1 className="text-3xl font-bold text-blue-800">
    //     Tailwind funcionando! 🚀
    //   </h1>
    // </div>
  );
  
  // const [count, setCount] = useState(0)

    // return (
    //   <>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //   </>
    // )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
