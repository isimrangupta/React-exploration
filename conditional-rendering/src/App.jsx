
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import ListItems from './components/ListItems'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


// if(!isLoggedIn){
//   return(
//     <LoginBtn/>
//   )
// }



  // return(
//   <>
//   <h1>Wlecome everyone</h1>
//   {isLoggedIn && <LogoutBtn/>}
//   </>
  
// )




// return(
//   <>
//   {isLoggedIn ?<LogoutBtn/> :<LoginBtn/>}
//   </>
// )



// if (isLoggedIn) {
//   return (
//     <LogoutBtn/>
//   )

// } else{
//   return (
//    <LoginBtn/>
//   )
// }



return(
  <ListItems/>
)

 
}

export default App
