import { Box } from '@mui/system';
import { BrowserRouter ,  Route , Routes } from 'react-router-dom'; 
import { lazy, Suspense } from "react";
import Loader from '../Components/UI/Loader';
import './App.css';

// implementing dynamic importing for less initial load time and better performance.
const Welcoming = lazy(() => import('../Pages/Welcoming.jsx'));
const Test = lazy(() => import('../Pages/Home.jsx'));
const Results = lazy( () => import('../Pages/Result.jsx') )


function App() {
  return (
    <Box>
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Welcoming />} />
        <Route path='/home' element={<Welcoming />} />
        <Route path='/test' element={<Test />}  />
        <Route path='/result' element={<Results />}  />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </Box>
  );
}

export default App;
