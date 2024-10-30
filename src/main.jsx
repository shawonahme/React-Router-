import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './all-components/Navbar/NavPage/Home/Home.jsx';
import About from './all-components/Navbar/NavPage/About/About.jsx';
import AboutDetail from './all-components/Navbar/NavPage/About/AboutDetail.jsx';
import Error from './all-components/Navbar/NavPage/errorpage/Error.jsx';
import HomeDetails from './all-components/Navbar/NavPage/Home/HomeDetails.jsx';



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      

      {
        path:'/home',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Home></Home>

      },
      
      {
        path:'/about',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <About></About>

      },
      {
        path:'/services',
        element: <div>I am from services</div>

      },  {
        path:'/portfolio',
        element: <div>I am from portfolio</div>

      },
      {
        path:'/blog',
        element: <div>I am from blog</div>

      },
      {
        path:'/contact',
        element: <div>I am from contact</div>

      },
      {
        path:'/about/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.userId}`),
        element: <AboutDetail></AboutDetail>

      },
      {
        path:'/home/:id',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <HomeDetails></HomeDetails>
        
      }
    
    
    ]
  },
 
  
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
