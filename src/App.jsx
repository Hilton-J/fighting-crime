import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Main from './components/Main.jsx'
import MainLayout from './layouts/MainLayout.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
