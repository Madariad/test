
import './App.css'

import { useParams } from 'react-router-dom';





import NavBar from "@/components/navBar";
import MainPage from '@/page/mainPage';




function App() {
  const {lang} = useParams()

  return (
    <>
      <NavBar />
    
      <MainPage />
      <div style={{height: '500px'}}>
        Section
      </div>



    </>
  )
}

export default App
