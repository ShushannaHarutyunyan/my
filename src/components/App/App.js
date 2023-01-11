import './App.css';
import { posts as userPosts, users as authers, LogInUser} from '../../const';
import { useState } from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';
import User from '../User/User';
import Modal from "react-modal";
import BlogModal from '../shared/BlogModal';

Modal.setAppElement("#root");

function App() {
  const [posts, setPosts] = useState(userPosts);
  const [users] =useState(authers);
  const [modal, setModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({});

  const findeUser=(userId)=>{
    return users.find((user)=>user.id===userId)
  };
  const handleModalBlogSave = () => {
    const updatedBlogData = JSON.parse(JSON.stringify(posts));
    const blogIndex = updatedBlogData.findIndex(
      (blog) => blog.id === currentBlog.id
    );
    updatedBlogData[blogIndex] ={...currentBlog}
    setPosts(updatedBlogData);
    setModal(false);
  };
  const handleModalClose = () => {
    setModal(false);
    setCurrentBlog({});
  };
  const hendleEditePost =(bloginfo)=>{
    setCurrentBlog(bloginfo);
    setModal(true)
  }
  const handleBlogChange = (event, index) => {
  const updatedBlog = JSON.parse(JSON.stringify(currentBlog));
  updatedBlog[event.target.name] = event.target.value;      
  setCurrentBlog(updatedBlog);
  };

  return (
    <div className="App">
<Header />
<User userId= {LogInUser}/>
      {posts.map((post)=>{
         return <Post key={post.id} 
                post ={post}
                user={findeUser(post.userId)} 
                hendleEditePost={hendleEditePost}         
          />
        })}
              <BlogModal
        modal={modal}
        currentBlog={currentBlog}
        handleBlogChange={handleBlogChange}
        handleModalBlogSave={handleModalBlogSave}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}

export default App;
