import './App.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar /><Home/></>
    },

    {
      path:'/login',
      element:  <><Navbar /><Login/></>
    },
    {
      path:'/about',
      element: <><Navbar /><About/></>

    },
    {
      path:'/user/:username',
      element: <><Navbar /><User/></>

    }
  ])
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
