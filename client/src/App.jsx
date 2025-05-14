import './App.css'
import HomePage from './components/homePage/homePage'
import ViewMoreDetailsApartment from './components/ViewData/ViewMoreDetailsApartment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewApartments from './components/ViewData/ViewApartments'
import ViewAttractions from './components/ViewData/ViewAttractions';
import ViewMoreDetailsAttraction from './components/ViewData/ViewMoreDetailsAttraction';
import ViewRestaurants from './components/ViewData/ViewRestaurants';
import ViewMoreDetailsRestaurant from './components/ViewData/ViewMoreDetailsRestaurant';

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ViewApartments />} />
        <Route path="/apartments/:apartmentName" element={<ViewMoreDetailsApartment />} />
        <Route path="/attractions" element={<ViewAttractions />} />
        <Route path="/attractions/:attractionName" element={<ViewMoreDetailsAttraction />} />
        <Route path="/restaurants" element={<ViewRestaurants />} />
        <Route path="/restaurants/:restaurantName" element={<ViewMoreDetailsRestaurant />} />
      </Routes>
    </Router>

  )
}

export default App;