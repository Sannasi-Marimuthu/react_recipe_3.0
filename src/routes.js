import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/aboutme",
    element:<h1>This is about page</h1>
  },
  {
    path:"/abc",
    element:<h1>AbC Page</h1>
  }
])

const MyRoutes = () => {
    return <RouterProvider router ={router} />
}

export default MyRoutes;