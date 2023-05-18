
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Show from './components/prescription/Show';
import RootLayout from './routes/RootLayout';
import Edit from './components/prescription/Edit';
import Delete from './components/prescription/Delete';
import Add from './components/prescription/Add';
import NotFound from './components/shared/NotFound';


const router= createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children:[
      {path:'', element: <div><p>Please select any item.</p></div>},
      {path:'/new', element: <Add/> },
      {path:'/view', element: <Show/> },
      {path:'/edit', element: <Edit/> },
      {path:'/delete', element: <Delete/> }
    ]
  },
  {path:'*', element:<NotFound/>}
]);


function App() {    
  return (
    <RouterProvider router={router}/>    
  );
}

export default App;
