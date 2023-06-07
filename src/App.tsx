
import Update from '@/components/update'
import './App.scss'
import SignIn from './components/SignIn/SignIn'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
 
  return (
    <>
      <SignIn/>
    </>
  )
}

export default App
