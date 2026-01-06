import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/pages/MainPage/MainPage'

function App() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-6 bg-background-primary'>
      <MainPage/>
    </div>
  )
}

export default App