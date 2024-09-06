import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Main from './components/Main.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import ViewPage from './pages/ViewPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Wanted from './components/Wanted.jsx';
import TalkToUs from './components/TalkToUs.jsx';
import About from './components/about.jsx';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/wanted/" element={<Wanted />} />
        <Route path="/talk/" element={<TalkToUs />} />
        <Route path="/about/" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
