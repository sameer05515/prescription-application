
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Show from './components/prescription/Show';
import RootLayout from './routes/RootLayout';
import Edit from './components/prescription/Edit';
import Delete from './components/prescription/Delete';
import Add from './components/prescription/Add';
import NotFound from './components/shared/NotFound';
// import ViewEditToggleExample from './components/shared/ViewEditToggleExample';
// import CollapseExpandExample from './components/shared/hoc/CollapseExpandExample';
import { useState } from 'react';
import ViewEditToggleExample from './components/shared/hoc/ViewEditToggleExample';
import CollapseExpandExample from './components/shared/hoc/CollapseExpandExample';
import Navbar from './components/header/Navbar';
import EditableInput from './components/shared/hoc/EditableInput';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <div><p>Please select any item.</p></div> },
      { path: '/new', element: <Add /> },
      { path: '/view', element: <Show /> },
      { path: '/edit', element: <Edit /> },
      { path: '/delete', element: <Delete /> }
    ]
  },
  { path: '*', element: <NotFound /> }
]);


function App() {

  const [title, setTitle] = useState('My first post');
  const list = [
    { id: 1, name: 'Eggs' },
    { id: 2, name: 'Bread' },
  ];

  // const title= 'My first post';

  const handleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
    console.log(title);
  }

  const postValueSaveHandler = (editedText) => {
    setTitle(editedText);
    console.log(title);
  }

  const postToggle = (toggleStatus) => {
    console.log(`Toggle done : ${toggleStatus} `)
  }

  return (
    <div className="container">
      <Navbar />
      <RouterProvider router={router} />
      <br />
      <ViewEditToggleExample
        title={title}
        onChangeHandler={(e) => handleChange(e)}
        postToggleCallbackHandler={postToggle}
        initialToggleStatus={true} />
      <br />
      <CollapseExpandExample list={list} />
      <br />

      <EditableInput
        title={title}
        postToggleCallbackHandler={postToggle}
        postValueSave={postValueSaveHandler}
        initialToggleStatus={false} />
      <br />
      <EditableInput
        postValueSave={postValueSaveHandler}
        postToggleCallbackHandler={postToggle}
        initialToggleStatus={false} />

      {/* <input type="text" value={title} onChange={(e)=>handleChange(e)}/> */}
    </div>

  );
}

export default App;
