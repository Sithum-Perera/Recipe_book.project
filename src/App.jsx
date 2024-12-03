import { Route, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='flex'>
      {/*<SideBar/>*/}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favourites" element={<FavouritesPage/>}/>
      </Routes>
    </div>
  )
}

export default App
