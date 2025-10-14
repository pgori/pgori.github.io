import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './contexts/GlobalProvider.tsx'
import { HashRouter } from 'react-router-dom'
import '@fontsource/vt323' //importing here as well to force vite to build the woff files
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalProvider>
  </StrictMode>,
)
