
import { useState,useEffect } from 'react'
 import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Home({name}) {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  getPosts()
  }, [])
  return (
    <>
    {posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
    </>
  );
}

export default Home