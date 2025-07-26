import { Route, Routes } from 'react-router'
import Home from './Pages/Home'

function App() {


  return (
    <div>
      <title> Alexis Hampton</title>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
