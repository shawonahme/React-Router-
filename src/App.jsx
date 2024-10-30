

import { Outlet } from 'react-router-dom'
import Navbar from './all-components/Navbar/Navbar'
import './App.css'



function App() {


 

  return (
    <>
 
   <Navbar></Navbar>
    <div className='w-full mx-auto bg-red'>
   
    </div>
   <Outlet></Outlet>

  
    </>
  )
}

export default App
