import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import { PostList } from './store/post-list-store';


const router = createBrowserRouter([
  {
    path: "/",  
    element: <App />, 
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> }]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
