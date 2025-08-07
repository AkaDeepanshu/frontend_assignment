import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import ProfileScreen from './pages/ProfileScreen';
import CommentsDashboard from './pages/CommentsDashboard';

const queryClient = new QueryClient()


function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    {/* <ProfileScreen/> */}
    <CommentsDashboard/>
    </QueryClientProvider>
    </>
  )
}

export default App
