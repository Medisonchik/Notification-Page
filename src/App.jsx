import './App.css'
import Users from './components/users/Users'

function App() {

  return (
    <div className='container'>
      <header>
        <h1>Notifications
          <span style={{color: "white"}} className='number-notif'>3</span>
        </h1>
        <span className='mark-read'>Mark all as read</span>
      </header>
      <Users />

    </div>
  )
}

export default App
