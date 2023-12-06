

function AllPosts({posts, hash}) {

  return (
      <ul>
        {
          posts.map((post) => {
            return (
            <li key={post.id} className={hash === post.id ? "selected" : ""}> 
              <a href={`#${post.id === hash ? "" : post.id}`}>
                {post.title}
              </a>
            </li>
            )
          })
        }
      </ul>
      
  )
}

export default AllPosts
