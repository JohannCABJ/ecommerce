import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../myaccount'
import MyOrder from '../myorder'
import MyOrders from '../myorders'
import Signin from '../signin'
import NotFound from '../notfound'
import Navbar from '../../components/navbar'
import './App.css'

const Approutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/myorder', element: <MyOrder /> },
    { path: '/myorders', element: <MyOrders /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  return (
    < BrowserRouter >
      <Approutes />
      <Navbar />
    </BrowserRouter>


  )
}

export default App
