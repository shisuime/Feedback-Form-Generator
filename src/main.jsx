import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminPanelpage from './pages/AdminPanelPage';
import FormsPanel from './components/FormsPanel/FormsPanel';
import HomePage from './pages/HomePage';
import FormGeneration from './components/FormGeneration/FormGeneration';
import './index.css';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminPanelpage />, // done styling for this and its children
    children: [
      {
        path: "/",
        element: <FormsPanel />,// done styling for this and its children
      },
      {
        path: "/formGeneration/:id",
        element: <FormGeneration />, 
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage/>,// done styling for this and its children
  },
]);


const root=createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);

