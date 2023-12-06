import { useState, useEffect } from 'react'
import AllPosts from './AllPosts'
import SinglePost from './SinglePost'
import './App.css'


function App() {

  const [posts, setPosts] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      const data = await response.json()
      
      setPosts(data)
      
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })
  },[])

  const post = posts.find((post) => {
    return hash === post.id
  })
  console.log(post)

  return (
    <div>
      <h1>Json Posts ({posts.length})</h1>
      {
        post ? (<SinglePost post={post}/>) : null
      }
      <AllPosts posts={posts} hash={hash}/>
    </div>
      
  )
}

export default App
