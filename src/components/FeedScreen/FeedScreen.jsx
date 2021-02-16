import React, { useEffect, useState, useCallback } from 'react';
import './FeedScreen.css';
import { FeedList } from './UI/FeedList';
import { getPosts, putPost } from '../../api/api';

export const FeedScreen = ({ userId, goToLoginScreen}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const [activelink, setActiveLink] = useState('');

  const start = () =>{
    putPost(userId, 'NASA Breaking news', 'https://www.nasa.gov/rss/dyn/breaking_news.rss')
      .then(result => setPosts(result));
    putPost(userId, 'Reddit front page', 'https://www.reddit.com/.rss')
      .then(result => setPosts(result));
    putPost(userId, 'Mobile World Live', 'https://www.mobileworldlive.com/latest-stories/feed/')
      .then(result => setPosts(result));
    getPosts(userId)
      .then(result => setPosts(result));
  };

  const getNewPosts = async() => {
    const newPosts = await getPosts(userId);
    setPosts(newPosts);
  }

  const addPost = async () => {
    putPost(userId, title, body)
      .then(result => setPosts(result));
  }

  useEffect(() => {
    start();
    getNewPosts();
  }, [])

  const getActiveLink = (link) => {
    console.log(link)
  }

  console.log(posts);

  return (
    <section>
      <header className="Feed__header">
        <h1>Feed Reader</h1>
        <button 
          className="Button" 
          onClick={()=>goToLoginScreen()}
        >
          Log Out
        </button>
      </header>
      <main>
        <form 
          className="Feed__form"
          onSubmit={(e)=>{
            e.preventDefault();
            addPost();
          }}
        >
          <button 
            className="Feed__Button"
            type="submit"
          >
            Add
          </button>
          <label>
            Title
            <input 
              className="Form__input"
              type="text"
              title="Put your name"
              value={title}
              onChange={e=>setTitle(e.target.value)}
              required />
          </label>
          <label>
            RSS link
            <input 
              className="Form__input"
              type="text"
              value={body}
              onChange={e=>setBody(e.target.value)}
              required 
            />
          </label>
        </form>
        {posts && (
          <FeedList 
            posts={posts}
            getActiveLink={getActiveLink}
          />
        )}
      </main>
    </section>

  )
}