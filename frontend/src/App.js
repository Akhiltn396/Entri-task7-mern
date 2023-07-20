import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/register/Signup';
import News from './pages/News/News';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        {/* <Navbar />
        <Outlet />
        <Footer/> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <News />,
        },
      ],
      },

    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;


}

export default App;
