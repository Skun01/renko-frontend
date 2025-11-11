import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'

function App() {
  const router = createBrowserRouter(routes);
  return (
   <div className='app'>
      <RouterProvider router={router} />
   </div>
  )
}

export default App
