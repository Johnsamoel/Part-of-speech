import { Box } from '@mui/system';
import { BrowserRouter ,  Route , Routes } from 'react-router-dom'; 
import { lazy, Suspense } from "react";
import Loader from '../Components/UI/Loader';
import './App.css';

// implementing dynamic importing for less initial load time and better performance.
const Home = lazy(() => import('../Pages/Welcoming.jsx'));


function App() {
  return (
    <Box>
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </Box>
  );
}

export default App;
