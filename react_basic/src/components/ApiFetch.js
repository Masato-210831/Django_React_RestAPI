import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //   setPosts(res.data)
    //   console.log(res)
    // })

    // fetchを使用した方法
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method:'GET'})
    .then(res => res.json()) // HTMLのレスポンスが変えるため、jsonに変換
    .then(data => setPosts(data))
  },[clicked])

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <br />
      <button onClick={handlerClicked}>Get post</button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul> */}
    </div>
  )
}

export default ApiFetch
