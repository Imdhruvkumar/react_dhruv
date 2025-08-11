
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserConProvider from './Context/UserConProvider'


function App() {
  
  return (
    <UserConProvider>
      <h1>
        dhruv kumar
      </h1>
      <Login/>
      <Profile/>
    </UserConProvider>
  )
}

export default App
