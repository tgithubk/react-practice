import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Apifetch = () => {

  const [posts,setPosts] =useState([])
  const [id,setId] =useState(1)
  const [clicked,setClicked] = useState(false)

  const handlerClick = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      setPosts(res.data)
    })
  },[clicked])

  return (
    <div>
      <input type='text' value={id} onChange={evt =>setId(evt.target.value)}/>
      <br />
      <button type='button' onClick={handlerClick}>Get post</button>
      {posts.title}
    </div>
  )
}

export default Apifetch