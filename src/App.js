import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { LoadBlog } from './Api/Api'

function App() {

  const [blogs, setBlogs] = useState([])
  const [filtredBlogs, setFiltredBlogs] = useState([])

  useEffect(() => {
      const initBlog = async () => {
          const blog = await LoadBlog();

          setBlogs(blog);
          if (filtredBlogs.length === 0) {
              setFiltredBlogs(blog);
          }
      };

      initBlog();
  }, [])

  const onSearchHandler = (substr) => {
      const newBlog = blogs.filter(
          (blog) => blog.text.includes(substr) || blog.title.includes(substr)
      );
      setFiltredBlogs(newBlog);
  };

  return (
    <div className="App">
        <Header
          onSearchHandler={onSearchHandler}
        />
        <Main 
          filtredBlogs={filtredBlogs}
        />
    </div>
  );
}

export default App;
