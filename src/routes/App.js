import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';
import { useState } from 'react';
import PostListProvider from '../store/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {
  const [selectedTab, setSelectedTAb] = useState("Home")

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTAb={setSelectedTAb} />
        <div className='content'>
          {/* <Outlet/> */}
           {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
      </div>
    </PostListProvider>
  );
}

export default App;
