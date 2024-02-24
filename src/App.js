import './App.css';
import AlbumList from './components/AlbumList/AlbumList';
import AddForm from './components/AddForm/AddForm';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateForm from './components/UpdateForm/UpdateForm';
function App() {

  const router = createBrowserRouter([
    {path:'/',
    element:<Navbar />,
    children:[
      {index:true, element:<AlbumList />},
      {path:'addAlbum', element:<AddForm />},
      {path:'updateAlbum', element:<UpdateForm />}
    ]}
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
