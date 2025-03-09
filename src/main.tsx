import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { TimelineProvider } from './context/timeline-context.tsx'
import { GlobalProvider } from './context/global-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalProvider>
        <TimelineProvider>
          <App />
        </TimelineProvider>
      </GlobalProvider>
    </ThemeProvider>
  </StrictMode>,
)
