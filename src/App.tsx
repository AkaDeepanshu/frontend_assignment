import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CommentsDashboard from './pages/CommentsDashboard'
import NavBar from './components/NavBar'
import ProfileScreen from './pages/ProfileScreen'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<CommentsDashboard />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
